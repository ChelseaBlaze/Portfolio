import React from "react";
import { Header, Footer } from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Projects,
  About,
  BadURL404,
} from "./pages/index.js";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<BadURL404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;





