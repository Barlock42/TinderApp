import Home from "./pages/Home.tsx";
import Sign from "./pages/Sign.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
