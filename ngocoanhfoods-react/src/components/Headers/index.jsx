import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/header/LOGO.jpg";
import { useContext, useEffect, useState } from "react";
import { getCategories } from "../../services/common/api/api-category";
import { UserContext } from "../../App";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
export default function Headers() {
  const [categories, setCategories] = useState();
  const userInfo = useContext(UserContext);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  useEffect(() => {
    getCategories().then((res) => setCategories(res.data));
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("jwt");
    removeCookie("user");
    Swal.fire({
      text: "Đăng xuất thành công!",
      icon: "success",
    });
    navigate("/");
  };

  // useEffect(() => {
  //   if (!userInfo) {
  //     return setTotalCartItems(0);
  //   }
  //   getCartItems(userInfo?.id, cookies.jwt).then((res) => {
  //     setTotalCartItems(res.data?.length);
  //     console.log(res?.data?.length);
  //     // xem lai them vao gio hang nen co loading
  //   });
  // }, [totalCartItems]);

  if (!categories)
    return (
      <div>
        <div class="loader"></div>
      </div>
    );

  return (
    <div className="wide-nav">
      <div className="header-container fixed-top-header">
        <div className="d-flex header-top">
          <div className="col-7 d-flex justify-content-center">
            <div className="d-flex justify-content-center align-items-center">
              <svg
                style={{ color: "white" }}
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
            </div>
            <p className="ms-1">
              <b>Địa chỉ:</b> 856/54 Tôn Đức Thắng, Hòa Khánh Bắc, Liên Chiểu,
              Hòa Khánh
            </p>
          </div>
          {userInfo && (
            <div
              className=" d-flex ms-3 info-sb"
              style={{ display: "inline-block" }}
            >
              <p>{userInfo.username}</p>
              <Link onClick={handleLogout}>Đăng xuất</Link>
              <div
                className="d-flex justify-content-start align-items-center ms-3"
                style={{ position: "relative", cursor: "pointer" }}
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-cart c-w-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
                <span className="quantity-cart px-1">{totalCartItems}</span>
              </div>
            </div>
          )}
          {!userInfo && (
            <div className="col-5 d-flex justify-content-center">
              <Link to={"/login"}>Đăng nhập</Link>
              <div className="d-flex justify-content-center align-items-center mx-2">
                <div
                  style={{
                    width: "1px",
                    backgroundColor: "#f0f0f0",
                    height: "16px",
                  }}
                ></div>
              </div>
              <Link to={"/register"}>Đăng ký</Link>
              <div
                className="d-flex justify-content-start align-items-center ms-3"
                style={{ position: "relative", cursor: "pointer" }}
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-cart c-w-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
                <span className="quantity-cart px-1">{totalCartItems}</span>
              </div>
            </div>
          )}
        </div>
        <div
          className="d-flex justify-content-center"
          style={{
            backgroundColor: "white",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="header-nav container-fl">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-3 d-flex justify-content-start align-items-center">
              <img src={logo} alt="logo" height="60px" />
            </div>
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-9 d-flex align-items-center">
              <div className="d-flex title-menu">
                <p onClick={() => navigate("/")}>Trang Chủ</p>
              </div>
              <div className="d-flex title-menu">
                <p>Giới Thiệu</p>
              </div>
              <div className="title-menu" onClick={()=>{navigate("/products")}}>
                <div className="d-flex">
                  <p>Sản Phẩm</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </div>
                </div>
                <div className="dropdown-menu-content">
                  {categories.map((cate) => (
                    <div className="mt-3 mb-2 ps-3" key={cate.id}>
                      <Link to={"/products"}>{cate.attributes.name}</Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-flex title-menu">
                <div className="d-flex">
                  <p>Chính sách</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </div>
                </div>
                <div className="dropdown-menu-content">
                  <div className="mt-3 mb-2 ps-3">
                    <Link to={"/"}>Chính sách bảo mật</Link>
                  </div>
                  <div className="mt-3 mb-2 ps-3">
                    <Link to={"/"}>Chính sách vận chuyển</Link>
                  </div>
                  <div className="mt-3 mb-2 ps-3">
                    <Link to={"/"}>Quy định sử dụng</Link>
                  </div>
                  <div className="mt-3 mb-2 ps-3">
                    <Link to={"/"}>Hướng dẫn mua hàng</Link>
                  </div>
                </div>
              </div>
              <div className="d-flex title-menu">
                <p>Blog Sức Khỏe Và Sắc Đẹp</p>
              </div>
              <div className="d-flex title-menu">
                <p>Dự Án Sữa Hạt Yêu Thương</p>
              </div>
              <div className="d-flex title-menu">
                <p>Liên hệ</p>
                <div className="d-flex justify-content-center align-items-center">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-layer" style={{ height: "120px" }}></div>
    </div>
  );
}
