import { Link, useNavigate } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

import "./HomePage.css";
import crs11 from "../../assets/homePage/Chung_nhan_home_2.png";
import crs12 from "../../assets/homePage/Linh_vuc_kinh_doanh.png";
import crs31 from "../../assets/homePage/crs3/no_fat.webp";
import crs32 from "../../assets/homePage/crs3/no_toxic.webp";
import crs33 from "../../assets/homePage/crs3/clean_source.webp";
import ct1 from "../../assets/homePage/category/cate_banh.jpg";
import ct2 from "../../assets/homePage/category/cate_hat_dinh_duong.jpg";
import ct3 from "../../assets/homePage/category/cate_hat_lam_sua.jpg";
import ct4 from "../../assets/homePage/category/cate_ngu_coc.jpg";
import ct5 from "../../assets/homePage/category/cate_rong_bien.webp";
import ct6 from "../../assets/homePage/category/cate_trai_cay.png";
import { useRef } from "react";

export default function HomePage() {

    const categorySwiperRef = useRef();
    const navigate = useNavigate();


    return (
        <div className="homePage-container">
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    speed={1100}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                >
                    <SwiperSlide>
                        <div>
                            <div className="d-flex justify-content-center">
                                <img src={crs12} alt="..." className="img-cr1-h" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="d-flex justify-content-center">
                                <img src={crs11} alt="..." className="img-cr1-h" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="banner-home mt-3">
                <div className="container-fl">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        // }}
                        speed={1100}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            380: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 0
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 0
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className="d-flex align-items-center justify-content-center banner-content">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart me-3" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                </svg>
                                <p>Đảm bảo chất lượng</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex align-items-center justify-content-center banner-content">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-truck me-3" viewBox="0 0 16 16">
                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                                </svg>
                                <p>Vận chuyển toàn quốc</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex align-items-center justify-content-center banner-content">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-repeat me-3" viewBox="0 0 16 16">
                                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                                    <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z" />
                                </svg>
                                <p>Miễn phí trả đổi</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex align-items-center justify-content-center banner-content">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart me-3" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                </svg>
                                <p>Đảm bảo chất lượng</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex align-items-center justify-content-center banner-content">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-truck me-3" viewBox="0 0 16 16">
                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                                </svg>
                                <p>Vận chuyển toàn quốc</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex align-items-center justify-content-center banner-content">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-repeat me-3" viewBox="0 0 16 16">
                                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                                    <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z" />
                                </svg>
                                <p>Miễn phí trả đổi</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className="q-home d-flex container-fl" style={{ flexWrap: 'wrap', marginTop: '80px' }}>
                <div className="col-lg-7 col-12">
                    <h2 style={{ fontWeight: 'bold', fontSize: '36px', lineHeight: 'normal' }}>TẠI SAO KHÁCH HÀNG <br />
                        <span style={{ color: 'rgb(51 167 93)' }}> LỰA CHỌN</span> NGỌC OANH FOODS</h2>
                </div>
                <div className="col-lg-5 col-12">
                    <p>Thương hiệu Ngọc Oanh Foods đã và đang cung cấp ra thị trường các sản phẩm dinh dưỡng 100% healthy
                        , hỗ trợ cải thiện sức khỏe, tái tạo năng lượng cho mọi khách hàng.</p>
                </div>
            </div>

            <div className="container-fl" style={{ marginTop: '100px' }}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    speed={1100}
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        380: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 0
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className="card-home-crs3">
                            <div className="col-9">
                                <div className="d-flex justify-content-center mb-5">
                                    <img src={crs31} alt="..." height="80px" />
                                </div>
                                <div>
                                    <p className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold', color: '#257140' }}>Không chất béo xấu</p>
                                    <p className="content-crs3">Baker Baking luôn cố gắng tận dụng tối đa nguồn chất béo tốt từ các loại hạt dinh dưỡng như hạt hạnh nhân, óc chó, macca, hạt dẻ, hạt điều, hạt bí, nho kho, quả nam việt quất,..</p>
                                    <Link to={"/a"} className="mt-3 mb-2" style={{ textAlign: 'center', display: 'block' }}>Tìm hiểu thêm &gt;</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-home-crs3">
                            <div className="col-9">
                                <div className="d-flex justify-content-center mb-5">
                                    <img src={crs33} alt="..." height="80px" />
                                </div>
                                <div>
                                    <p className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold', color: '#257140' }}>Nguồn gốc xuất sứ rõ ràng</p>
                                    <p className="content-crs3">Nguồn nguyên liệu để sản xuất tại Baker Baking đều từ các sản phẩm có nguồn gốc xuất xứ rõ ràng, có giấy chứng nhận kiểm định chất lượng của Bộ Y tế.</p>
                                    <Link to={"/a"} className="mt-3 mb-2" style={{ textAlign: 'center', display: 'block' }}>Tìm hiểu thêm &gt;</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-home-crs3">
                            <div className="col-9">
                                <div className="d-flex justify-content-center mb-5">
                                    <img src={crs32} alt="..." height="80px" />
                                </div>
                                <div>
                                    <p className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold', color: '#257140' }}>Không chất bảo quản</p>
                                    <p className="content-crs3">Các sản phẩm ngũ cốc Granola, bánh biscotti, bánh quy yến mạch,... mang thương hiệu Baker Baking đều cam kết 100% không sử dụng chất bảo quản hóa học ...</p>
                                    <Link to={"/a"} className="mt-3 mb-2" style={{ textAlign: 'center', display: 'block' }}>Tìm hiểu thêm &gt;</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-home-crs3">
                            <div className="col-9">
                                <div className="d-flex justify-content-center mb-5">
                                    <img src={crs31} alt="..." height="80px" />
                                </div>
                                <div>
                                    <p className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold', color: '#257140' }}>Không chất béo xấu</p>
                                    <p className="content-crs3">Baker Baking luôn cố gắng tận dụng tối đa nguồn chất béo tốt từ các loại hạt dinh dưỡng như hạt hạnh nhân, óc chó, macca, hạt dẻ, hạt điều, hạt bí, nho kho, quả nam việt quất,..</p>
                                    <Link to={"/a"} className="mt-3 mb-2" style={{ textAlign: 'center', display: 'block' }}>Tìm hiểu thêm &gt;</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-home-crs3">
                            <div className="col-9">
                                <div className="d-flex justify-content-center mb-5">
                                    <img src={crs33} alt="..." height="80px" />
                                </div>
                                <div>
                                    <p className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold', color: '#257140' }}>Nguồn gốc xuất sứ rõ ràng</p>
                                    <p className="content-crs3">Nguồn nguyên liệu để sản xuất tại Baker Baking đều từ các sản phẩm có nguồn gốc xuất xứ rõ ràng, có giấy chứng nhận kiểm định chất lượng của Bộ Y tế.</p>
                                    <Link to={"/a"} className="mt-3 mb-2" style={{ textAlign: 'center', display: 'block' }}>Tìm hiểu thêm &gt;</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-home-crs3">
                            <div className="col-9">
                                <div className="d-flex justify-content-center mb-5">
                                    <img src={crs32} alt="..." height="80px" />
                                </div>
                                <div>
                                    <p className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold', color: '#257140' }}>Không chất bảo quản</p>
                                    <p className="content-crs3">Các sản phẩm ngũ cốc Granola, bánh biscotti, bánh quy yến mạch,... mang thương hiệu Baker Baking đều cam kết 100% không sử dụng chất bảo quản hóa học ...</p>
                                    <Link to={"/a"} className="mt-3 mb-2" style={{ textAlign: 'center', display: 'block' }}>Tìm hiểu thêm &gt;</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>

            <div className="container-fl" style={{ marginTop: '130px' }}>
                <p style={{ textAlign: 'center', fontSize: '30px', color: 'rgb(51 167 93)', fontWeight: '600' }} className="mb-5">Các sản phẩm nổi bật</p>
                <div className="list-cate-crs">
                    <Swiper
                        onSwiper={(swiper) => { categorySwiperRef.current = swiper }}
                        slidesPerView={2}
                        spaceBetween={0}
                        // loop={true}
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        // }}
                        speed={1100}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            380: {
                                slidesPerView: 2,
                                spaceBetween: 0
                            },
                            420: {
                                slidesPerView: 2,
                                spaceBetween: 0
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 0
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 0
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className="category-h" onClick={() => { navigate("/to") }}>
                                <div className="d-flex justify-content-center">
                                    <img src={ct1} alt="..." />
                                </div>
                                <div>
                                    <p className="mt-4 mb-3" style={{ textAlign: 'center', fontWeight: 'bold' }}>Tất cả sản phẩm</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="category-h" onClick={() => { navigate("/") }}>
                                <div className="d-flex justify-content-center">
                                    <img src={ct1} alt="..." />
                                </div>
                                <div>
                                    <p className="mt-4 mb-3" style={{ textAlign: 'center', fontWeight: 'bold' }}>Bánh hạt dinh dưỡng</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="category-h" onClick={() => { navigate("/") }}>
                                <div className="d-flex justify-content-center">
                                    <img src={ct2} alt="..." />
                                </div>
                                <div>
                                    <p className="mt-4 mb-3" style={{ textAlign: 'center', fontWeight: 'bold' }}>Hạt dinh dưỡng</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="category-h" onClick={() => { navigate("/") }}>
                                <div className="d-flex justify-content-center">
                                    <img src={ct3} alt="..." />
                                </div>
                                <div>
                                    <p className="mt-4 mb-3" style={{ textAlign: 'center', fontWeight: 'bold' }}>Hạt làm sữa</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="category-h" onClick={() => { navigate("/") }}>
                                <div className="d-flex justify-content-center">
                                    <img src={ct4} alt="..." />
                                </div>
                                <div>
                                    <p className="mt-4 mb-3" style={{ textAlign: 'center', fontWeight: 'bold' }}>Ngũ cốc</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="category-h" onClick={() => { navigate("/") }}>
                                <div className="d-flex justify-content-center">
                                    <img src={ct5} alt="..." />
                                </div>
                                <div>
                                    <p className="mt-4 mb-3" style={{ textAlign: 'center', fontWeight: 'bold' }}>Rong biển sấy</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="category-h" onClick={() => { navigate("/") }}>
                                <div className="d-flex justify-content-center">
                                    <img src={ct6} alt="..." />
                                </div>
                                <div>
                                    <p className="mt-4 mb-3" style={{ textAlign: 'center', fontWeight: 'bold' }}>Trái cây sấy</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-3">
                    <button className="btn-more-cate" onClick={() => { categorySwiperRef.current.slideNext() }}>Xem thêm
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>


            
            <div>
                <p>kj</p>
                <p>kj</p>
                <p>kj</p>
                <p>kj</p>
                <p>kj</p>
                <p>kj</p>
                <p>kj</p>
                <p>kj</p>
                <p>kj</p>
                <p>kj</p>
                <p>kj</p>
                <p>kj</p>
                <p>kj</p>
                <p>kj</p>
                <p>kj</p>
            </div>


        </div>
    )
}