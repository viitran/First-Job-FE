import { Link, useNavigate } from "react-router-dom";
import "./Products.css";
import product from "../../assets/homePage/product.jpg";
export default function Products() {

    const navigate = useNavigate();
    return (
        <div className="container-fl">
            <div>
                <p className="breadcrum">Sản phẩm \ <span style={{color:'#3fb568'}}>TẤT CẢ SẢN PHẨM</span></p>
            </div>
            <div className="d-flex" style={{ flexWrap: 'wrap' }}>
                <div className="col-3 rps-sb-p">
                    <div>
                        <div className="box-filter">
                            <div style={{ padding: '10px 30px' }} className="title-filter">
                                <p>DANH MỤC</p>
                            </div>
                            <div>
                                <div className="filter-content" style={{ margin: '0px 30px' }}>
                                    <p onClick={()=>{navigate("/all")}}>TẤT CẢ SẢN PHẨM</p>
                                    <p onClick={()=>{navigate("/")}}>Bánh hạt dinh dưỡng</p>
                                    <p onClick={()=>{navigate("/")}}>Hạt dinh dưỡng</p>
                                    <p onClick={()=>{navigate("/")}}>Hạt làm sữa</p>
                                    <p onClick={()=>{navigate("/")}}>Ngũ cốc</p>
                                </div>
                            </div>
                        </div>
                        <div className="box-filter">
                            <div style={{ padding: '10px 30px' }} className="title-filter">
                                <p>TÌM SẢN PHẨM</p>
                            </div>
                            <div>
                                <div className="filter-content">
                                    <div className="px-3 py-3 d-flex">
                                        <input type="text" placeholder="Tìm kiếm sản phẩm" className="sideBar-search" />
                                        <button className="sideBar-search-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-filter">
                            <div style={{ padding: '10px 30px' }} className="title-filter">
                                <p>KHUYỄN MÃI HOT</p>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-12 container-list-p">
                    <div className="d-flex justify-content-end pt-2 pb-3" style={{ borderBottom: '1px solid #ebebeb' }}>
                        <span className="me-2" style={{ fontSize: '14px', alignContent: 'center' }}>Sắp xếp</span>
                        <select defaultValue="default" className="sort-filter">
                            <option value="default">Mặc định</option>
                            <option value="">A - Z</option>
                            <option value="">Z - A</option>
                            <option value="">Giá tăng dần</option>
                            <option value="">Giá giảm dần</option>
                            <option value="">Hàng mới nhất</option>
                            <option value="">Hàng cũ nhất</option>
                        </select>
                    </div>
                    <div className="product-list">
                        <div className="col-lg-4 col-sm-6 col-6 container-card-p">
                            <div className="product-card-p">
                                <div>
                                    <Link to={"/"}>
                                        <img src={product} alt="..." width="100%" />
                                    </Link>
                                </div>
                                <div className="d-flex justify-content-center" style={{ paddingTop: '25px', paddingBottom: '15px' }}>
                                    <Link to={"/"} className="title-card-p">Bánh lúa mạch</Link>
                                </div>
                                <div>
                                    <p className="price-p">550.000đ</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-6 container-card-p">
                            <div className="product-card-p">
                                <div>
                                    <Link to={"/"}>
                                        <img src={product} alt="..." width="100%" />
                                    </Link>
                                </div>
                                <div className="d-flex justify-content-center" style={{ paddingTop: '25px', paddingBottom: '15px' }}>
                                    <Link to={"/"} className="title-card-p">Bánh lúa mạch</Link>
                                </div>
                                <div>
                                    <p className="price-p">550.000đ</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-6 container-card-p">
                            <div className="product-card-p">
                                <div>
                                    <Link to={"/"}>
                                        <img src={product} alt="..." width="100%" />
                                    </Link>
                                </div>
                                <div className="d-flex justify-content-center" style={{ paddingTop: '25px', paddingBottom: '15px' }}>
                                    <Link to={"/"} className="title-card-p">Bánh lúa mạch</Link>
                                </div>
                                <div>
                                    <p className="price-p">550.000đ</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-6 container-card-p">
                            <div className="product-card-p">
                                <div>
                                    <Link to={"/"}>
                                        <img src={product} alt="..." width="100%" />
                                    </Link>
                                </div>
                                <div className="d-flex justify-content-center" style={{ paddingTop: '25px', paddingBottom: '15px' }}>
                                    <Link to={"/"} className="title-card-p">Bánh lúa mạch</Link>
                                </div>
                                <div>
                                    <p className="price-p">550.000đ</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-6 container-card-p">
                            <div className="product-card-p">
                                <div>
                                    <Link to={"/"}>
                                        <img src={product} alt="..." width="100%" />
                                    </Link>
                                </div>
                                <div className="d-flex justify-content-center" style={{ paddingTop: '25px', paddingBottom: '15px' }}>
                                    <Link to={"/"} className="title-card-p">Bánh lúa mạch</Link>
                                </div>
                                <div>
                                    <p className="price-p">550.000đ</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-6 container-card-p">
                            <div className="product-card-p">
                                <div>
                                    <Link to={"/"}>
                                        <img src={product} alt="..." width="100%" />
                                    </Link>
                                </div>
                                <div className="d-flex justify-content-center" style={{ paddingTop: '25px', paddingBottom: '15px' }}>
                                    <Link to={"/"} className="title-card-p">Bánh lúa mạch</Link>
                                </div>
                                <div>
                                    <p className="price-p">550.000đ</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-6 container-card-p">
                            <div className="product-card-p">
                                <div>
                                    <Link to={"/"}>
                                        <img src={product} alt="..." width="100%" />
                                    </Link>
                                </div>
                                <div className="d-flex justify-content-center" style={{ paddingTop: '25px', paddingBottom: '15px' }}>
                                    <Link to={"/"} className="title-card-p">Bánh lúa mạch</Link>
                                </div>
                                <div>
                                    <p className="price-p">550.000đ</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-6 container-card-p">
                            <div className="product-card-p">
                                <div>
                                    <Link to={"/"}>
                                        <img src={product} alt="..." width="100%" />
                                    </Link>
                                </div>
                                <div className="d-flex justify-content-center" style={{ paddingTop: '25px', paddingBottom: '15px' }}>
                                    <Link to={"/"} className="title-card-p">Bánh lúa mạch</Link>
                                </div>
                                <div>
                                    <p className="price-p">550.000đ</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mt-5">
                        <p>Chèn phân trang</p>
                    </div>
                </div>
            </div>
        </div>
    )
}