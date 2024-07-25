import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers";
import "bootstrap/dist/css/bootstrap.css";
import { Helmet } from "react-helmet";
import Student from './components/Student/index';
function App() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Headers />} />
          <Route path="/students" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;