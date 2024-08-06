import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

export default function Footer() {

    const navigate = useNavigate();
    return (
        <div className="footer-container" style={{ paddingTop: '50px' }}>
            <div className="container-fl d-flex" style={{ flexWrap: 'wrap' }}>
                <div className="col-lg-4 col-md-6 col-12 pe-5">
                    <div className="mb-4">
                        <p style={{ color: 'white', fontSize: '18px', fontWeight: '700' }}>Liên Hệ</p>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="d-flex justify-content-center" style={{ paddingTop: '5px' }}>
                            <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg>
                        </div>
                        <p className="ps-2" style={{ marginBottom: '0', justifyContent: 'center' }}>Số 856/54 Tôn Đức Thắng, Hòa Khánh Bắc, Liên Chiểu, Hòa Khánh</p>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="d-flex justify-content-center" style={{ paddingTop: '5px' }}>
                            <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                        </div>
                        <p className="ps-2" style={{ marginBottom: '0', justifyContent: 'center' }}>0961239667 <br />Thứ 2 - Thứ 7: 7h30 - 11h30, 13h30 - 17h30</p>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="d-flex justify-content-center" style={{ paddingTop: '5px' }}>
                            <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                            </svg>
                        </div>
                        <p className="ps-2" style={{ marginBottom: '0', justifyContent: 'center' }}>cososanxuatngocoanhfoods@gmail.com</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 pe-5 policy-f">
                    <div className="mb-4">
                        <p style={{ color: 'white', fontSize: '18px', fontWeight: '700' }}>Chính sách</p>
                    </div>
                    <div>
                        <ul>
                            <li onClick={() => { navigate("/") }}>Chính sách bảo mật</li>
                            <li onClick={() => { navigate("/") }}>Chính sách vận chuyển</li>
                            <li onClick={() => { navigate("/") }}>Quy định sử dụng</li>
                            <li onClick={() => { navigate("/") }}>Hướng dẫn mua hàng</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 pe-5 fb-footer">
                    <div className="mb-4">
                        <p style={{ color: 'white', fontSize: '18px', fontWeight: '700' }}>Kết nối với Ngọc Oanh Foods</p>
                    </div>
                    <div>
                        <iframe title="fb-k" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fngocoanhfoods%3Fmibextid%3DLQQJ4d&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="130" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>
            <div className="mt-5" style={{ backgroundColor: '#14542a' }}>
                <div>
                    <p style={{ textAlign: 'center', paddingTop: '15px' }}>© Bản quyền thuộc về <b>Ngọc Oanh Foods</b></p>
                    <p style={{ textAlign: 'center', paddingTop: '15px' }}>Giấy chứng nhận hộ kinh doanh cấp lần đầu ngày 08/09/2023</p>
                    <p style={{ textAlign: 'center', padding: '15px 0px 20px 0px' }}>Mã ĐKKD: 8938553036</p>
                </div>
            </div>
        </div>
    )
}