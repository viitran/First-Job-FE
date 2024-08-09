import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

import { useNavigate, useParams } from "react-router-dom";
import { findProductById } from "../../services/common/api/api-product";
import Swal from "sweetalert2";
import {
  addToCart,
  checkProductOnCart,
  getCartItems,
  getInformationUser,
  updateProductOnCart,
} from "./../../services/common/api/api-auth";
import { useCookies } from "react-cookie";
import { axiosClient } from "../../services/common/axios-client";
export default function Detail() {
  const params = useParams();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const userInfo = useContext(UserContext);
  const [cookies, setCookie] = useCookies(["user"]);
  const [cartItems, setCartItems] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState();
  const [cartId, setCartId] = useState([]);
  const jwt = cookies.jwt;
  const data = {
    data: {
      products: product?.id,
      quantity: quantity,
      amount: quantity * product?.attributes?.price,
      users_permissions_user: userInfo.id,
      userId: userInfo.id,
    },
  };

  useEffect(() => {
    const { id } = params;
    if (params && id) {
      findProductById(id).then((res) => {
        setProduct(res.data);
      });
    }
  }, [params]);

  const renderImage = (obj) => {
    return !(
      obj &&
      obj.attributes &&
      obj.attributes.image &&
      obj.attributes.image.data &&
      obj.attributes.image.data[0] &&
      obj.attributes.image.data[0].attributes &&
      obj.attributes.image.data[0].attributes.url
    ) ? (
      <div></div>
    ) : (
      <img
        style={{ maxWidth: "100%", height: "100%" }}
        src={`http://localhost:1337${obj.attributes.image.data[0].attributes.url}`}
      />
    );
  };

  useEffect(() => {
    getInformationUser(jwt).then((res) => {
      setCartId(res);
    });
  }, [jwt]);

  const onAddToCart = () => {
    if (!userInfo) {
      Swal.fire({
        title: "Vui lòng đăng nhập để mua hàng",
        icon: "warning",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Đóng",
      });
      // navigate("/login")
      return;
    }

    try {
      checkProductOnCart(product?.id, userInfo.id, jwt).then((res) => {
        if (res.data.length > 0) {
          updateProductOnCart(
            cartId?.gio_hangs[0]?.quantity + quantity,
            cartId?.gio_hangs[0].id,
            jwt
          ).then((res) => {
            return Swal.fire({
              text: "Sản phẩm đã được cập nhật vào giỏ hàng",
              icon: "success",
            });
          });
        }
        addToCart(data, jwt).then((res) => {
          Swal.fire({
            text: "Sản phẩm đã được thêm vào giỏ hàng",
            icon: "success",
          });
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) return <div>loading....</div>;

  return (
    <>
      <div className="container-fl p-5 col-12 row">
        {/* detail */}
        <div className="col-9">
          <div class="product col-12 row row mb-5">
            <div className="col-10">
              <div className="col-3">{renderImage(product)}</div>
              <div class="product-info col-9">
                {/* ten sp */}
                <div className="col-12">
                  <h2>{product?.attributes?.name}</h2>
                </div>
                {/* price */}
                <div className="price col-12">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product?.attributes?.price)}
                </div>
                <div className="col-12">
                  <p>{product?.attributes?.description}</p>
                </div>
                <div className="col-12">quantity</div>
              </div>

              <div className="col-12">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
            </div>

            <div className="col-2">
              <div className="col-12">
                <button className="add" onClick={() => onAddToCart()}>
                  them vao gio hang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
