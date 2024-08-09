import "./Detail.css";
import p0 from "../../assets/homePage/category/cate_banh.jpg";
import p1 from "../../assets/homePage/category/cate_hat_lam_sua.jpg";
import p2 from "../../assets/homePage/category/cate_banh.jpg";
import p3 from "../../assets/homePage/category/cate_hat_lam_sua.jpg";
import p4 from "../../assets/homePage/category/cate_banh.jpg";
import p5 from "../../assets/homePage/category/cate_hat_lam_sua.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Detail() {
    const [certificationCurrent, setCertificationCurrent] = useState();
    const [flagCerStatus, setFlagCerStatus] = useState(false);
    const [openCer, setOpenCer] = useState(false);

    const navigate = useNavigate();


    let a = [
        { id: 0, url: p0 },
        { id: 1, url: p1 },
        { id: 2, url: p2 },
        { id: 3, url: p3 },
        { id: 4, url: p4 },
        { id: 5, url: p5 },
    ];

    const [currentImg, setCurrentImg] = useState();

    //dùng useeffect chạy lần đầu gán giá trị ảnh đầu tiên vào currentImg
    useEffect(() => {
        setCurrentImg(a[0].url);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
        <>
            <div className="container-fl de-container">
                <div style={{ padding: '20px 0px' }}>
                    <span>Sản phẩm / </span> 
                    <span style={{color:'rgb(63, 181, 104)'}}>BÁNH BISCOTTI MIX 3 VỊ VANI </span>
                </div>
                <div className="d-flex" style={{ flexWrap: 'wrap' }}>
                    <div className="col-lg-9 col-12 d-flex" style={{ flexWrap: 'wrap' }}>
                        <div className="col-md-5 col-12 pe-4">
                            <div className="img-de-container">
                                <img src={currentImg} alt="..." width="100%" style={{ cursor: 'pointer' }} onClick={() => { openModalCer(currentImg) }} />
                            </div>
                            <div>
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={25}
                                    // loop={true}
                                    // autoplay={{
                                    //     delay: 2500,
                                    //     disableOnInteraction: false,
                                    // }}
                                    speed={1100}
                                    navigation={true}
                                    modules={[Navigation, Autoplay]}
                                >

                                    {
                                        a.map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <div onClick={() => { setCurrentImg(item.url) }}>
                                                    <div className="d-flex justify-content-center" style={{ border: '1px solid #ebebeb', cursor: 'pointer' }}>
                                                        <img src={item.url} alt="..." className="img-de" />
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                        <div className="col-md-7 col-12">
                            <p className="title-de">BÁNH BISCOTTI MIX 3 VỊ VANI, SOCOLA, TRÀ XANH </p>
                            <p style={{ cursor: 'pointer', marginBottom: '15px', fontSize: '15px' }}>Viết đánh giá</p>
                            <div className="d-flex dbp" style={{ marginBottom: '30px' }}>
                                <p style={{ alignContent: 'center' }}>Trạng thái: </p>
                                <p className="box-ava mx-2">Còn hàng</p>
                            </div>
                            <p className="price-de">55.000đ</p>
                            <div style={{ borderBottom: '1px solid #ebebeb', marginBottom: '15px' }}>
                                <p className="s-description-de">Sau một buổi tập đã thấm mệt hay những lúc ngồi buồn chán trong văn phòng 4 bức tường, Bánh quy nướng Biscotti mix 3 hương vị sẽ trở thành một món ăn hoàn hảo, vừa vui miệng lại cung cấp đầy đủ dưỡng chất có lợi, đặc biệt là không lo béo nhé!</p>
                            </div>
                            <p className="mb-3">Khối lượng</p>
                            <div>
                                <select className="weight-de">
                                    <option value="500">500g</option>
                                    <option value="400">400g</option>
                                    <option value="300">300g</option>
                                </select>
                            </div>
                            <div>
                                <span className="btn-atc">Thêm vào giỏ hàng</span>
                            </div>
                        </div>
                        <div style={{ marginTop: '50px', marginBottom: '30px' }}>
                            <span className="btn-de">Mô tả</span>
                        </div>
                        <div className="description-de-body">
                            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#323c3f', marginBottom: '20px' }}>Title</p>
                            <p> Granola là cái tên đã quá đỗi quen thuộc với những ai đang có chế độ ăn kiêng, giảm cân hay eat clean. Nhưng đối với nhiều người, dòng thực phẩm này còn khá mới lạ mặc dù nó chứa rất nhiều dưỡng chất có lợi cho sức khỏe.

                                Hôm nay, để giải đáp thắc mắc của nhiều bạn, hãy cùng Baker Baking đi tìm hiểu về Granola Vanilla nhé.

                                Đặc điểm của ngũ cốc granola Vanilla


                                Granola là một hỗn hợp yến mạch cùng rất nhiều loại hạt dinh dưỡng đi cùng, trong đó yến mạch là nguyên liệu chính. Nhờ được trộn giữa nhiều loại hạt, quả khác nhau, mà granola trà xanh có hương vị thơm ngon và dễ ăn, không nhạt nhẽo như yến mạch thông thường.

                                Granola Vanilla có vị ngọt tự nhiên đến từ các loại hạt và phảng phất mùi trà xanh kích thích mọi người thưởng thức.

                                Theo các chuyên gia dinh dưỡng, bạn nên sử dụng Granola vào mỗi sáng bằng cách trộn với một cốc sữa chua hoặc sữa tươi không đường. Bởi, yến mạch có đặc tính là tiêu hoá chậm và nhiều calo, cung cấp năng lượng cho bạn suốt buổi sáng mà không lo bị đói.</p>
                        </div>
                    </div>
                    <div className="col-3 rps-sb-de">
                        <div className="box-filter">
                            <div style={{ padding: '10px 30px' }} className="title-filter">
                                <p>DANH MỤC</p>
                            </div>
                            <div>
                                <div className="filter-content" style={{ margin: '0px 30px' }}>
                                    <p onClick={() => { navigate("/all") }}>TẤT CẢ SẢN PHẨM</p>
                                    <p onClick={() => { navigate("/") }}>Bánh hạt dinh dưỡng</p>
                                    <p onClick={() => { navigate("/") }}>Hạt dinh dưỡng</p>
                                    <p onClick={() => { navigate("/") }}>Hạt làm sữa</p>
                                    <p onClick={() => { navigate("/") }}>Ngũ cốc</p>
                                </div>
                            </div>
                        </div>
                        <div className="box-filter">
                            <div style={{ padding: '10px 30px' }} className="title-filter">
                                <p>SẢN PHẨM NỔI BẬT</p>
                            </div>
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
        </>
    )
}