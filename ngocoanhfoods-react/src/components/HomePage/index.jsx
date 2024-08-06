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
import ct5 from "../../assets/homePage/category/cate_rong_bien_2.webp";
import ct6 from "../../assets/homePage/category/cate_trai_cay.png";
import pp1 from "../../assets/homePage/crs3/clean_source.webp";
import pp2 from "../../assets/homePage/process/cook.webp";
import pp3 from "../../assets/homePage/process/packing.webp";
import pp4 from "../../assets/homePage/process/preservation.webp";
import ps from "../../assets/homePage/day_chuyen_san_xuat.webp";
import c1 from "../../assets/homePage/certification/c1.jpg";
import c2 from "../../assets/homePage/certification/c2.jpg";
import c3 from "../../assets/homePage/certification/c3.jpg";
import c4 from "../../assets/homePage/certification/c4.jpg";
import c5 from "../../assets/homePage/certification/c5.jpg";
import c6 from "../../assets/homePage/certification/c6.jpg";
import vision from "../../assets/homePage/vision.png";
import mission from "../../assets/homePage/mission.png";
import person from "../../assets/homePage/feedback/person.jpg";
import bl1 from "../../assets/homePage/blog/oc.jpg";
import bl2 from "../../assets/homePage/blog/hanh_nhan.jpg";
import bl3 from "../../assets/homePage/blog/bi.jpg";
import bl4 from "../../assets/homePage/blog/banh.jpg";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {

    const categorySwiperRef = useRef();
    const navigate = useNavigate();
    const [certificationCurrent, setCertificationCurrent] = useState();
    const [flagCerStatus, setFlagCerStatus] = useState(false);
    const [openCer, setOpenCer] = useState(false);

    const certification = [
        { id: "1c", url: c1 },
        { id: "2c", url: c2 },
        { id: "3c", url: c3 },
        { id: "4c", url: c4 },
        { id: "5c", url: c5 },
        { id: "6c", url: c6 },
    ];

    const openModalCer = (url) => {
        setCertificationCurrent(url);
        setFlagCerStatus(!flagCerStatus);
    }

    const closeModalCer = () => {
        setOpenCer(false);
    }

    useEffect(() => {
        if (certificationCurrent) {
            setOpenCer(true);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [flagCerStatus])

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

            <div className="q-home d-flex container-fl" style={{ flexWrap: 'wrap' }}>
                <div className="col-lg-7 col-12">
                    <h2 className="rps-title1-h" style={{ fontWeight: 'bold', lineHeight: 'normal' }}>TẠI SAO KHÁCH HÀNG <br />
                        <span style={{ color: 'rgb(51 167 93)' }}> LỰA CHỌN</span> NGỌC OANH FOODS</h2>
                </div>
                <div className="col-lg-5 col-12">
                    <p>Thương hiệu Ngọc Oanh Foods đã và đang cung cấp ra thị trường các sản phẩm dinh dưỡng 100% healthy
                        , hỗ trợ cải thiện sức khỏe, tái tạo năng lượng cho mọi khách hàng.</p>
                </div>
            </div>

            <div className="container-fl box-container-h">
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
                        668: {
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
                                    <p className="content-crs3">Ngọc Oanh Foods luôn cố gắng tận dụng tối đa nguồn chất béo tốt từ các loại hạt dinh dưỡng như hạt hạnh nhân, óc chó, macca, hạt dẻ, hạt điều, hạt bí, nho kho, quả nam việt quất,..</p>
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
                                    <p className="content-crs3">Nguồn nguyên liệu để sản xuất tại Ngọc Oanh Foods đều từ các sản phẩm có nguồn gốc xuất xứ rõ ràng, có giấy chứng nhận kiểm định chất lượng của Bộ Y tế.</p>
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
                                    <p className="content-crs3">Các sản phẩm ngũ cốc, bánh gạo lứt, bánh cookie yến mạch,... mang thương hiệu Ngọc Oanh Foods đều cam kết 100% không sử dụng chất bảo quản hóa học ...</p>
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
                                    <p className="content-crs3">Ngọc Oanh Foods luôn cố gắng tận dụng tối đa nguồn chất béo tốt từ các loại hạt dinh dưỡng như hạt hạnh nhân, óc chó, macca, hạt dẻ, hạt điều, hạt bí, nho kho, quả nam việt quất,..</p>
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
                                    <p className="content-crs3">Nguồn nguyên liệu để sản xuất tại Ngọc Oanh Foods đều từ các sản phẩm có nguồn gốc xuất xứ rõ ràng, có giấy chứng nhận kiểm định chất lượng của Bộ Y tế.</p>
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
                                    <p className="content-crs3">Các sản phẩm ngũ cốc, bánh gạo lứt, bánh cookie yến mạch,... mang thương hiệu Ngọc Oanh Foods đều cam kết 100% không sử dụng chất bảo quản hóa học ...</p>
                                    <Link to={"/a"} className="mt-3 mb-2" style={{ textAlign: 'center', display: 'block' }}>Tìm hiểu thêm &gt;</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>

            <div className="container-fl">
                <p style={{ textAlign: 'center', color: 'rgb(51 167 93)', fontWeight: '600' }} className="mb-4 rps-title2-h">Các sản phẩm nổi bật</p>
            </div>

            <div style={{ width: '100%', overflow: 'hidden' }}>
                <div className="container-fl box-container-h">
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
                                        <p className="mt-4 mb-3 mx-2" style={{ textAlign: 'center', fontWeight: 'bold' }}>Tất cả sản phẩm</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="category-h" onClick={() => { navigate("/") }}>
                                    <div className="d-flex justify-content-center">
                                        <img src={ct1} alt="..." />
                                    </div>
                                    <div>
                                        <p className="mt-4 mb-3 mx-2" style={{ textAlign: 'center', fontWeight: 'bold' }}>Bánh hạt dinh dưỡng</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="category-h" onClick={() => { navigate("/") }}>
                                    <div className="d-flex justify-content-center">
                                        <img src={ct2} alt="..." />
                                    </div>
                                    <div>
                                        <p className="mt-4 mb-3 mx-2" style={{ textAlign: 'center', fontWeight: 'bold' }}>Hạt dinh dưỡng</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="category-h" onClick={() => { navigate("/") }}>
                                    <div className="d-flex justify-content-center">
                                        <img src={ct3} alt="..." />
                                    </div>
                                    <div>
                                        <p className="mt-4 mb-3 mx-2" style={{ textAlign: 'center', fontWeight: 'bold' }}>Hạt làm sữa</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="category-h" onClick={() => { navigate("/") }}>
                                    <div className="d-flex justify-content-center">
                                        <img src={ct4} alt="..." />
                                    </div>
                                    <div>
                                        <p className="mt-4 mb-3 mx-2" style={{ textAlign: 'center', fontWeight: 'bold' }}>Ngũ cốc</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="category-h" onClick={() => { navigate("/") }}>
                                    <div className="d-flex justify-content-center">
                                        <img src={ct5} alt="..." />
                                    </div>
                                    <div>
                                        <p className="mt-4 mb-3 mx-2" style={{ textAlign: 'center', fontWeight: 'bold' }}>Rong biển sấy</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="category-h" onClick={() => { navigate("/") }}>
                                    <div className="d-flex justify-content-center">
                                        <img src={ct6} alt="..." />
                                    </div>
                                    <div>
                                        <p className="mt-4 mb-3 mx-2" style={{ textAlign: 'center', fontWeight: 'bold' }}>Trái cây sấy</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-4">
                        <button className="btn-more-cate" onClick={() => { categorySwiperRef.current.slideNext() }}>Xem thêm
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>


            <div className="q-home d-flex container-fl" style={{ flexWrap: 'wrap' }}>
                <div className="col-lg-7 col-12">
                    <h2 className="rps-title1-h" style={{ fontWeight: 'bold', lineHeight: 'normal' }}><span style={{ color: 'rgb(51 167 93)' }}>QUY TRÌNH </span>SẢN XUẤT<br />
                        TẠI NGỌC OANH FOODS</h2>
                </div>
                <div className="col-lg-5 col-12">
                    <p>Ngọc Oanh Foods tuân thủ nghiêm ngặt các tiêu chuẩn chất lượng cao nhất trong toàn bộ quá trình sản xuất</p>
                </div>
            </div>

            <div className="container-fl box-container-h">
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
                        530: {
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
                        <div className="card-home-crs3">
                            <div className="col-9">
                                <div className="d-flex justify-content-center mb-5">
                                    <img src={pp1} alt="..." height="80px" />
                                </div>
                                <div>
                                    <p className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold', color: '#257140' }}>Nguyên liệu</p>
                                    <p className="content-crs3">Nguyên liệu đầu vào tại Ngọc Oanh Foods được nhập khẩu trực tiếp từ các quốc gia như Úc, Mỹ, Chile, các nước Nam Phi,.. và các cơ sở chế biến đạt tiêu chuẩn VietGAP.</p>
                                    <Link to={"/a"} className="mt-3 mb-2" style={{ textAlign: 'center', display: 'block' }}>Tìm hiểu thêm &gt;</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-home-crs3">
                            <div className="col-9">
                                <div className="d-flex justify-content-center mb-5">
                                    <img src={pp2} alt="..." height="80px" />
                                </div>
                                <div>
                                    <p className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold', color: '#257140' }}>Chế biến</p>
                                    <p className="content-crs3">Mỗi sản phẩm tại Ngọc Oanh Foods sẽ có quy trình chế biến khác nhau.  Chúng tôi luôn tuân thủ nghiêm ngặt các tiêu chuẩn chất lượng cao nhất về an toàn vstp.</p>
                                    <Link to={"/a"} className="mt-3 mb-2" style={{ textAlign: 'center', display: 'block' }}>Tìm hiểu thêm &gt;</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-home-crs3">
                            <div className="col-9">
                                <div className="d-flex justify-content-center mb-5">
                                    <img src={pp3} alt="..." height="80px" />
                                </div>
                                <div>
                                    <p className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold', color: '#257140' }}>Đóng gói</p>
                                    <p className="content-crs3">Sau quá trình sản xuất, các sản phẩm dinh dưỡng tại Ngọc Oanh Foods sẽ được kiểm tra thành phẩm rồi đóng gói, hút chân không theo quy trình khép kín, hiện đại.</p>
                                    <Link to={"/a"} className="mt-3 mb-2" style={{ textAlign: 'center', display: 'block' }}>Tìm hiểu thêm &gt;</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-home-crs3">
                            <div className="col-9">
                                <div className="d-flex justify-content-center mb-5">
                                    <img src={pp4} alt="..." height="80px" />
                                </div>
                                <div>
                                    <p className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold', color: '#257140' }}>Bảo quản</p>
                                    <p className="content-crs3">Hầu hết các sản phẩm mang thương hiệu Ngọc Oanh Foods sẽ có thời gian bảo quản là 6 tháng. Do không dùng chất bảo quản tổng hợp trong quá trình sản xuất.</p>
                                    <Link to={"/a"} className="mt-3 mb-2" style={{ textAlign: 'center', display: 'block' }}>Tìm hiểu thêm &gt;</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-home-crs3">
                            <div className="col-9">
                                <div className="d-flex justify-content-center mb-5">
                                    <img src={pp1} alt="..." height="80px" />
                                </div>
                                <div>
                                    <p className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold', color: '#257140' }}>Nguyên liệu</p>
                                    <p className="content-crs3">Nguyên liệu đầu vào tại Ngọc Oanh Foods được nhập khẩu trực tiếp từ các quốc gia như Úc, Mỹ, Chile, các nước Nam Phi,.. và các cơ sở chế biến đạt tiêu chuẩn VietGAP.</p>
                                    <Link to={"/a"} className="mt-3 mb-2" style={{ textAlign: 'center', display: 'block' }}>Tìm hiểu thêm &gt;</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-home-crs3">
                            <div className="col-9">
                                <div className="d-flex justify-content-center mb-5">
                                    <img src={pp2} alt="..." height="80px" />
                                </div>
                                <div>
                                    <p className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold', color: '#257140' }}>Chế biến</p>
                                    <p className="content-crs3">Mỗi sản phẩm tại Ngọc Oanh Foods sẽ có quy trình chế biến khác nhau.  Chúng tôi luôn tuân thủ nghiêm ngặt các tiêu chuẩn chất lượng cao nhất về an toàn vstp.</p>
                                    <Link to={"/a"} className="mt-3 mb-2" style={{ textAlign: 'center', display: 'block' }}>Tìm hiểu thêm &gt;</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-home-crs3">
                            <div className="col-9">
                                <div className="d-flex justify-content-center mb-5">
                                    <img src={pp3} alt="..." height="80px" />
                                </div>
                                <div>
                                    <p className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold', color: '#257140' }}>Đóng gói</p>
                                    <p className="content-crs3">Sau quá trình sản xuất, các sản phẩm dinh dưỡng tại Ngọc Oanh Foods sẽ được kiểm tra thành phẩm rồi đóng gói, hút chân không theo quy trình khép kín, hiện đại.</p>
                                    <Link to={"/a"} className="mt-3 mb-2" style={{ textAlign: 'center', display: 'block' }}>Tìm hiểu thêm &gt;</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-home-crs3">
                            <div className="col-9">
                                <div className="d-flex justify-content-center mb-5">
                                    <img src={pp4} alt="..." height="80px" />
                                </div>
                                <div>
                                    <p className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold', color: '#257140' }}>Bảo quản</p>
                                    <p className="content-crs3">Hầu hết các sản phẩm mang thương hiệu Ngọc Oanh Foods sẽ có thời gian bảo quản là 6 tháng. Do không dùng chất bảo quản tổng hợp trong quá trình sản xuất.</p>
                                    <Link to={"/a"} className="mt-3 mb-2" style={{ textAlign: 'center', display: 'block' }}>Tìm hiểu thêm &gt;</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>

            <div className="container-fl mb-5">
                <p className="rps-title2-h" style={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: '600', color: 'rgb(51, 167, 93)' }}>Giới thiệu dây chuyền sản xuất</p>
            </div>
            <div className="box-container-h">
                <img src={ps} alt="..." style={{ width: '100%', height: 'auto' }} />
            </div>



            <div className="container-fl mb-5 cer-container">

                <p className="rps-title2-h mb-5" style={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: '600', color: 'rgb(51, 167, 93)' }}>Các chứng chỉ đạt được</p>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={0}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    speed={1100}
                    navigation={true}
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
                    {certification.map((item, index) => (
                        <SwiperSlide key={item.id} virtualIndex={index}>
                            <div className="cer-card" onClick={() => { openModalCer(item.url) }}>
                                <img src={item.url} alt="..." style={{ width: '100%' }} />
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
            <div>
                <div>
                    <h2 className="rps-title1-h" style={{ fontWeight: 'bold', lineHeight: 'normal', textAlign: 'center' }}>CÂU CHUYỆN <span style={{ color: 'rgb(51 167 93)' }}>NGỌC OANH FOODS</span></h2>
                </div>
            </div>
            <div className="d-flex" style={{ flexWrap: 'wrap' }}>
                <div className="col-lg-6 col-12">
                    <img src={vision} alt="..." width="100%" />
                </div>
                <div className="col-lg-6 col-12">
                    <img src={mission} alt="..." width="100%" />
                </div>
            </div>

            <div style={{ backgroundColor: '#FFFCF3', padding: '70px 0px 100px 0px', marginBottom: '70px' }}>
                <div className="container-fl d-flex" style={{ flexWrap: 'wrap' }}>
                    <div className="col-lg-4 col-12" style={{ paddingTop: '30px' }}>
                        <h2 className="rps-title1-h" style={{ fontWeight: 'bold', lineHeight: 'normal' }}><span style={{ color: 'rgb(51 167 93)' }}>CẢM ƠN </span>
                            SỰ TIN TƯỞNG CỦA KHÁCH HÀNG</h2>
                        <p className="mt-4">Ngọc Oanh Foods chân thành cảm ơn sự ủng hộ của tất cả các khách hàng đã yêu mến và tin tưởng Ngọc Oanh Foods .....</p>
                    </div>
                    <div className="col-lg-4 col-12" style={{ paddingTop: '30px' }}>
                        <div className="feedback-card mx-4 p-4">
                            <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                <img src={person} alt="..." style={{ width: '100%' }} />
                            </div>
                            <div className="mt-3">
                                <p>Anh A</p>
                                <p>Là một người khá kỹ tính, tôi luôn luôn lựa chọn những thực phẩm sạch và tốt cho sức khỏe nhất, V và đây là nơi tôi đặt trọng niềm tin.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12" style={{ paddingTop: '30px' }}>
                        <div className="feedback-card mx-4 p-4">
                            <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                <img src={person} alt="..." style={{ width: '100%' }} />
                            </div>
                            <div className="mt-3">
                                <p>Anh B</p>
                                <p>Là một huấn luận viên tôi luôn lựa chọn kĩ càng những thực phẩm nạp vào cơ thể, và BakerBaking là sự lựa chọn của tôi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fl blog">
                <div>
                    <h2 className="rps-title1-h" style={{ fontWeight: 'bold', lineHeight: 'normal' }}>BÀI VIẾT CHUYÊN ĐỀ <br /><span style={{ color: 'rgb(51 167 93)' }}>
                        DINH DƯỠNG - GIẢM CÂN </span></h2>
                </div>
                <div className="d-flex pt-3" style={{ flexWrap: 'wrap' }}>
                    <div className="col-lg-6 col-12 d-flex post-bl pe-5" style={{ flexWrap: 'wrap' }}>
                        <div className="col-3">
                            <img src={bl1} alt="..." style={{ width: '100%', cursor: 'pointer' }} onClick={() => { navigate("/") }} />
                        </div>
                        <div className="col-9">
                            <Link to={"/"} className="title-blog">Ngũ cốc dành cho bà bầu loại nào tốt? Nên mua ở đâu?</Link>
                            <p>Ngũ cốc dành cho  bà bầu loại nào tốt và nên mua ở đâu luôn được phụ nữ mang thai quan tâm. Để chọn được loại ngũ cốc chất lượng nhất, người dùng có thể mua ở các siêu thị, cửa...</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 d-flex post-bl pe-5" style={{ flexWrap: 'wrap' }}>
                        <div className="col-3">
                            <img src={bl4} alt="..." style={{ width: '100%', cursor: 'pointer' }} onClick={() => { navigate("/") }} />
                        </div>
                        <div className="col-9">
                            <Link to={"/"} className="title-blog">Nên mua bánh gạo lứt ở đâu để đảm bảo chất lượng tốt nhất?</Link>
                            <p>Hiện nay, có rất nhiều người tìm mua bánh gạo lứt như một món ăn vặt Healthy giàu dinh dưỡng. Với hương vị hấp dẫn dễ ăn và hàm lượng dinh dưỡng cao, nếu chọn được đúng nơi mua uy tín,...</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 d-flex post-bl pe-5" style={{ flexWrap: 'wrap' }}>
                        <div className="col-3">
                            <img src={bl3} alt="..." style={{ width: '100%', cursor: 'pointer' }} onClick={() => { navigate("/") }} />
                        </div>
                        <div className="col-9">
                            <Link to={"/"} className="title-blog">Ngũ cốc mua ở đâu? 3 điểm mua nên trải nghiệm</Link>
                            <p>Ngoài chất lượng sản phẩm, ngũ cốc Granola mua ở đâu cũng là thắc mắc được nhiều người đặt ra khi chọn mua Granola. Người dùng có thể mua Granola ở các siêu thị, cửa hàng tiện lợi hoặc các...</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 d-flex post-bl pe-5" style={{ flexWrap: 'wrap' }}>
                        <div className="col-3">
                            <img src={bl2} alt="..." style={{ width: '100%', cursor: 'pointer' }} onClick={() => { navigate("/") }} />
                        </div>
                        <div className="col-9">
                            <Link to={"/"} className="title-blog">Hạt hạnh nhân giá bao nhiêu? Lợi ích vàng cho sức khỏe</Link>
                            <p>Từ lâu, hạt hạnh nhân được giới giảm cân và làm đẹp ưu ái với nguồn dưỡng chất cao đồng thời hỗ trợ cải thiện cân nặng và làn da. Không chỉ thế hạnh nhân còn được giới dinh dưỡng...</p>
                        </div>
                    </div>
                </div>
            </div>


            {
                openCer ? (
                    <div className="modal-certification">
                        <div style={{ position: 'fixed', top: '0', right: '0', padding: '10px 10px', cursor: 'pointer' }} onClick={closeModalCer}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg>
                        </div>
                        <img src={certificationCurrent} alt="..." className="img-cer" />
                    </div>
                ) : (<></>)
            }
        </div>
    )
}