import { useContext, useEffect, useState } from "react";
import {
  getCart,
  getCartItems,
  getInformationUser,
  getListCart,
} from "../../services/common/api/api-auth";
import { useCookies } from "react-cookie";
import { UserContext } from "../../App";

export default function Cart() {
  const userInfo = useContext(UserContext);
  const [cookies, setCookie] = useCookies(["user"]);
  const [cartItems, setCartItems] = useState();
  const jwt = cookies.jwt;
  const [user, setUser] = useState();
  // const handleLog = async () => {
  //   getListCart(userInfo.id, jwt).then((res) => {
  //     setCartItems(res.data);
  //   });
  // };
  useEffect(() => {
    getCart(jwt).then((res) => {
      setCartItems(res.data);
    });
  },[]);

  // const totalPrice = () =>{
  //   let total = 0;
  //   cartItems?.forEach((item) => {
  //     total += item?.attributes.amount * item?.attributes.quantity;
  //   });
  //   return total;
  // }

  if (!cartItems) return <div>loading...</div>;

  return (
    <>
      {/* <button onClick={() => handleLog()}>check</button> */}
      <div className="container-fl">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row p-4">
          <div className="col-lg-8 col-md-8 col-xs-12">
            {cartItems?.map((item)=>(
              <div key={item.id}>
                <div>{item?.attributes.products?.data[0].attributes.name}</div>
                <div>{item?.attributes.quantity}</div>
                <div>{item?.attributes.amount}</div>
              </div>
            ))}
          </div>

          <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
            <div style={{ position: "sticky", top: "100px" }}>
              <div className="col-lg-12">Thông tin đơn hàng</div>
              <hr />
              <div className="col-12 row">
                <div className="col-7">Tổng tiền: </div>
                <div
                  className="col-5"
                  style={{ color: "red", fontWeight: "bold" }}
                >
                  {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(totalPrice)}
                </div>
              </div>
              <hr />
              <div className="col-12">
                <li>
                  Phí vận chuyển sẽ được Nhân viên cửa hàng liên hệ báo lại cụ
                  thể theo địa chỉ của Khách hàng và chính sách giao hàng của
                  UNLIMITED
                </li>
              </div>
              <div className="row text-center mt-3">
                <button className="btn btn-primary">
                  Tiến hành thanh toán
                </button>
                <button className="btn btn-primary mt-2">
                  Tiếp tục mua sắm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="p-3">breadcrumb / b</div>
      <div className="container-fl">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-4 rps-title2-h">Giỏ hàng</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            {products.map((p) => (
              <div className="cart-container" key={p?.id}>
                <div className="cart-item">
                  <div className="row">
                    <div className="col-4 col-sm-3 col-md-3">
                      {renderImage(p)}
                    </div>
                    <div className="col-8 col-sm-9 col-md-9">
                      <div className="cart-item-name">{p?.name}</div>
                      <div className="cart-item-price">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(p?.price)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className="col-12 col-md-6">
            <div className="payment-container">
              <button className="btn btn-success">Thanh toan</button>
              <button className="btn btn-primary ms-2">
                Tiep tuc mua hang
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
