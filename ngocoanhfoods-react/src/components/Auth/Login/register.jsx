import { useEffect, useState } from "react";
import { registerUser } from "../../../services/common/api/api-auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const onCreateAccount = () => {
    registerUser(username, email, password).then(
      (res) => {
        const user = res.user;
        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("jwt", res.jwt);
        Swal.fire({
          title: "Chúc mừng",
          text: "Bạn đã tạo tài khoản thành công",
          icon: "success",
        });
        navigate("/");
      },
      (e) => {}
    );
  };

  return (
    <>
      <h1>Đăng ký tài khoản</h1>
      <hr />
      <div className="container-fl items-center">
        <input
          type="text"
          className="form-control"
          placeholder="Nhập username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          className="form-control mt-2"
          placeholder="Nhập email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="mt-2 form-control"
          placeholder="Nhập mat khau"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => onCreateAccount()}
          disabled={!(username || email || password)}
          className="btn btn-success mt-3"
        >
          Dang ky
        </button>
      </div>
    </>
  );
}
