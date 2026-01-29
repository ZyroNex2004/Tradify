import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Portfolio from "./Components/Portfolio";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
