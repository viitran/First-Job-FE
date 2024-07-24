import { Link } from "react-router-dom";
import "./Header.css";
import logo from '../../assets/header/LOGO.jpg';
export default function Headers() {

  return (
    <>
      <div className="header-top d-flex">
        <div
          className="col-7 d-flex justify-content-end"
        >
          <div className="icon-map">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
          </div>{" "}
          <div className="d-flex justify-content-center align-items-center">
            <strong>Địa chỉ: </strong> 856/54 Tôn Đức Thắng, Hòa Khánh Bắc, Liên Chiểu, Hòa Khánh, Đà Nẵng
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-3 d-flex justify-content-center" style={{ backgroundColor: "red" }}>
          <p style={{borderRight:'2px solid white', marginBottom:'0'}}>a</p> 
        </div>
      </div>
    </>
  );
}
