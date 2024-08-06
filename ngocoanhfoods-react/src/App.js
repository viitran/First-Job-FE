import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Helmet } from "react-helmet";
import HomePage from "./components/HomePage";
import Master from "./components/Master";
import Products from "./components/Products";
function App() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;