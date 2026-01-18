import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Portfolio from "./Components/Portfolio";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
