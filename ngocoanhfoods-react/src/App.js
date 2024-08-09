import { Routes, BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Helmet } from "react-helmet";
import HomePage from "./components/HomePage";
import Master from "./components/Master";
import Products from "./components/Products";
import Student from "./components/Student";
import ProductCategory from "./components/Product";
import Login from "./components/Auth/Login/login";
import Register from "./components/Auth/Login/register";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { axiosClient } from "./services/common/axios-client";
import Cart from "./components/Cart/index";

export const UserContext = createContext(null);
function App() {
  const [cookies, setCookie] = useCookies(["user"]);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (cookies.jwt) {
      axiosClient
        .get("/users", {
          headers: {
            Authorization: "Bearer " + cookies.jwt,
          },
        })
        .then((res) => {
          setUserInfo(res.data[0]);
        });
    }
  }, []);

  // neu chua dnhap
  if (!userInfo) {
    return (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          />
        </Helmet>
        <UserContext.Provider value={userInfo}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Master />}>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/check/:id" element={<Student />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </Helmet>
      <UserContext.Provider value={userInfo}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Master />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<Products />} />
              <Route
                path="/products-category/:name"
                element={<ProductCategory />}
              />
              <Route path="/check/:id" element={<Student />} />
              <Route path="/account" element={<Student />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
