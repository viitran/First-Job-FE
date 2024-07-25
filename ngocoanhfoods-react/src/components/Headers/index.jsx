import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/header/LOGO.jpg";
import { getURLCategories } from "./../../services/common/api";
import { useEffect, useState } from "react";

export default function Headers() {
  const [categories, setCategories] = useState();
  
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const response = await fetch(getURLCategories);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  if (!categories) return <div>loading....</div>;
  return (
    <>
      <div className="header-container">
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
          <div className="col-5 d-flex justify-content-center">
            <Link to={"/"}>Đăng nhập</Link>
            <div className="d-flex justify-content-center align-items-center mx-2">
              <div
                style={{
                  width: "1px",
                  backgroundColor: "#f0f0f0",
                  height: "16px",
                }}
              ></div>
            </div>
            <Link to={"/"}>Đăng ký</Link>
          </div>
        </div>
        <div className="header-nav">
          <div className="col-3 d-flex justify-content-end align-items-center">
            <img src={logo} alt="logo" height="60px" />
          </div>
          <div className="col-9 d-flex align-items-center ps-5">
            <div className="d-flex title-menu">
              <p>Trang Chủ</p>
            </div>
            <div className="d-flex title-menu">
              <p>Giới Thiệu</p>
            </div>
            <div className="title-menu">
              <div className="d-flex">
                <p>Sản Phẩm</p>
                <span className="material-symbols-outlined">chevron_right</span>
              </div>
              <div className="dropdown-menu-content">
                {categories.data.map((cate) => (
                  <div className="mt-3 mb-2 ps-3" key={cate.id}>
                    <Link to={"/"}>{cate.attributes.name}</Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="d-flex title-menu">
              <div className="d-flex">
                <p>Chính sách</p>
                <span className="material-symbols-outlined">chevron_right</span>
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
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
