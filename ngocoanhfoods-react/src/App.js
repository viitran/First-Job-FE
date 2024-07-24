import { Routes,BrowserRouter,Route } from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Headers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
