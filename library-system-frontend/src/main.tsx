import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import About from "./components/About";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found!");
}

ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
