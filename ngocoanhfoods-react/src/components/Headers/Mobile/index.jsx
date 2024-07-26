import "./HeaderMobile.css";
import logo from "../../../assets/header/LOGO.jpg";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderMobile() {
    const [isContentOpen, setIsContentOpen] = useState(false);
    const navigate = useNavigate();

    const openSideBar = () => {
        setIsContentOpen(true);
    }

    const closeSideBar = () => {
        setIsContentOpen(false);
    }

    const expandProduct = (event) => {
        const element = event.currentTarget;
        element.classList.toggle("show-expand");
    }

    useEffect(() => {
        if (isContentOpen) {
            document.body.classList.add('disable-scroll');
        } else {
            document.body.classList.remove('disable-scroll');
        }

        // Cleanup function
        return () => {
            document.body.classList.remove('disable-scroll');
        };
    }, [isContentOpen]);
    return (
        <div className="header-mobile-container">
            <div className="header-mobile">
                <div className="col-4 d-flex align-items-center">
                    <div className="expand-btn" onClick={openSideBar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <img src={logo} alt="logo" height="45px" />
                </div>
                <div className="col-4 pe-3 d-flex justify-content-end align-items-center">
                    <div className="d-flex justify-content-start" style={{ position: 'relative', cursor: 'pointer' }} onClick={() => { navigate("/cart") }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                        </svg>
                        <span className="quantity-cart-m px-1">
                            0
                        </span>
                    </div>
                </div>
            </div>
            <div className="header-layer-m" style={{ height: '65px' }}></div>
            <div className={`content-header-m ${isContentOpen ? 'visible' : ''}`}>
                <div className="d-flex login-m-section">
                    <div className="col-9 d-flex align-items-center ps-3">
                        <div className="col-12 d-flex">
                            <svg style={{ color: '#f0f0f0' }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                            <div className="ms-3 d-flex align-items-center" style={{ display: 'inline-block' }}>
                                <Link to={"/login"} style={{ color: '#f0f0f0', textDecoration: 'none', fontSize: '15px' }}>Đăng Nhập</Link>
                                <span style={{ borderRight: '2px solid #f0f0f0', height: '17px' }} className="mx-2"></span>
                                <Link to={"/signin"} style={{ color: '#f0f0f0', textDecoration: 'none', fontSize: '15px' }}>Đăng Ký</Link>
                            </div>
                            {/* <div className="ms-3 info-sb" style={{display:'inline-block'}}>
                                <p>khanh</p>
                                <Link to={"/logout"}>Đăng xuất</Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-3 d-flex justify-content-end pt-2 pe-2 align-items-baseline">
                        <div style={{ cursor: 'pointer' }} onClick={closeSideBar}>
                            <svg style={{ color: '#f0f0f0' }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="sb-m-content">
                    <div className="px-3 py-3 d-flex">
                        <input type="text" placeholder="Tìm kiếm sản phẩm" className="sideBar-search" />
                        <button className="sideBar-search-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </button>
                    </div>
                    <div className="px-3">
                        <Link to={"/cart"}>Giỏ Hàng</Link>
                        <Link to={"/"}>Trang chủ</Link>
                        <Link to={"/introduce"}>Giới Thiệu</Link>
                        <div>
                            <div onClick={expandProduct} className="d-flex title-exp-m"
                                style={{ padding: '10px 0px 10px 0px', borderBottom: '1px solid rgb(228, 228, 228)', cursor: 'pointer' }}>
                                <p className="col-10">Sản Phẩm</p>
                                <div className="col-2 d-flex justify-content-center align-items-center">
                                    <span className="material-symbols-outlined" style={{ color: 'rgb(37 113 64 / 85%)' }}>chevron_right</span>
                                </div>
                            </div>
                            <div className="list-exp-m">
                                <Link to={"/"}>+ Bánh hạt dinh dưỡng</Link>
                                <Link to={"/"}>+ Ngũ cốc dinh dưỡng</Link>
                                <Link to={"/"}>+ Rong biển sấy</Link>
                                <Link to={"/"}>+ Hạt dinh dưỡng</Link>
                            </div>
                        </div>
                        <div>
                            <div onClick={expandProduct} className="d-flex title-exp-m"
                                style={{ padding: '10px 0px 10px 0px', borderBottom: '1px solid rgb(228, 228, 228)', cursor: 'pointer' }}>
                                <p className="col-10">Chính sách</p>
                                <div className="col-2 d-flex justify-content-center align-items-center">
                                    <span className="material-symbols-outlined" style={{ color: 'rgb(37 113 64 / 85%)' }}>chevron_right</span>
                                </div>
                            </div>
                            <div className="list-exp-m">
                                <Link to={"/"}>+ Chính sách bảo mật</Link>
                                <Link to={"/"}>+ Chính sách vận chuyển</Link>
                                <Link to={"/"}>+ Quy định sử dụng</Link>
                                <Link to={"/"}>+ Hướng dẫn mua hàng</Link>
                            </div>
                        </div>
                        <Link to={"/blog"}>Blog sức khỏe và sắc đẹp</Link>
                        <Link to={"/project"}>Dự Án Sữa Hạt Yêu Thương</Link>
                        <Link to={"/contact"}>Liên Hệ</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}