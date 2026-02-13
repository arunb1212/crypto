import React, { useContext, useEffect, useState } from "react";
import { CoinCon } from "../Context/CoinContext";
import Hero from "./Components/Hero";
import CoinList from "./Components/CoinList";
import Trending from "./Components/Trending";
import Features from "./Features";
import Pricing from "./Pricing";
import Blogs from "./Blogs";
import { FaChartColumn } from "react-icons/fa6";
import { GiDart } from "react-icons/gi";
import { LuFilePenLine } from "react-icons/lu";
import { GiCrossMark } from "react-icons/gi";

const Home = () => {
  const { coin } = useContext(CoinCon);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(coin);
  }, [coin]);

  return (
    <div className="flex flex-col min-h-screen text-white font-outfit">
      
      <Hero setDis={setDisplayCoin} />
      
      <Trending />

      <div className="container mx-auto px-4 py-8 space-y-20">
        <CoinList displayCoin={displayCoin} />

        {/* Features Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            <Features logo={<FaChartColumn className="text-4xl text-purple-500" />} para={"Live Charts"} />
            <Features logo={<GiDart className="text-4xl text-purple-500" />} para={"Accurate Pricing"} />
            <Features logo={<LuFilePenLine className="text-4xl text-purple-500" />} para={"Daily Blogs"} />
          </div>
        </div>

        {/* Pricing Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Our Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            <Pricing mark2={<GiCrossMark />} mark3={<GiCrossMark />} mark4={<GiCrossMark />} plan={"Basic"}Price={"Custom"} />
            <Pricing mark3={<GiCrossMark />} mark4={<GiCrossMark />} plan={"Pro"} />
            <Pricing plan={"Enterprise"} />
          </div>
        </div>

        {/* Blogs Section */}
        <div className="flex flex-col items-center pb-20">
          <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            <Blogs ll={"Quis aspernatur ut et sit ipsum quae pariatur consequuntur adipisci qui consectetur."} img={"https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Blogs ll={"Molestiae quo dicta possimus quia accusantium fuga magnam in provident."} img={"https://images.unsplash.com/photo-1621504450168-b8c4375443a2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Blogs ll={"Aut assumenda aut fugiat totam molestias fugiat in.Molestias deserunt iste velit."} img={"https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
