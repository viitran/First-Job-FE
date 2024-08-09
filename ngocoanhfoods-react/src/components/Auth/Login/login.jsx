import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { signIn } from "../../../services/common/api/api-auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["user"]);
// fix lai khi login thanh cong van chua hien thi duoc ten dnhap + logout cung v
  const onSignIn = () => {
    signIn(email, password).then((res) => {
      setCookie("jwt", res.jwt, { path: "/" });
    });
    Swal.fire({
      text: "Đăng nhập thành công",
      icon: "success",
    });
    navigate(-1);
  };
  const handle = () => {
    setCookie("email", email, { path: "/" });
    setCookie("password", password, { path: "/" });
    console.log(cookies);
  };
  return (
    <>
      <div>
        <h1>email</h1>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h1>password</h1>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mt-2 ">
          <button onClick={() => onSignIn()}>Dang nhap</button>
        </div>
        <hr />
        {/* {cookies.Name && (
          <div>
            Name: <p>{cookies.Name}</p>
          </div>
        )}
        {cookies.Password && (
          <div>
            Password: <p>{cookies.Password}</p>
          </div>
        )} */}
      </div>
    </>
  );
}
