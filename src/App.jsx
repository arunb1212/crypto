import React from "react";
import { Routes, Route } from "react-router";
import Home from "./Home";
import Nsv from "./Components/Nsv";
import Coins from "./Components/Coins";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen w-full font-outfit">
      <Nsv />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/:coinid" element={<Coins />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
