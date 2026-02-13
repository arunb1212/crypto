import React, { useContext, useState } from 'react';
import { CoinCon } from '../../Context/CoinContext';
import { Link } from 'react-router';

const Nsv = () => {
  const [active, setActive] = useState("Home");
  const { setcurr } = useContext(CoinCon);

  const handler = (e) => {
    switch (e.target.value) {
      case "usd":
        setcurr({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setcurr({ name: "eur", symbol: "€" });
        break;
      case "inr":
        setcurr({ name: "inr", symbol: "₹" });
        break;
      default:
        setcurr({ name: "usd", symbol: "$" });
        break;
    }
  };

  return (
    <div className='sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-700'>
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        <Link to={"/"} className="flex items-center gap-2">
            {/* Placeholder for logo if img is missing, or use text */}
           <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">CryptoMarket</h1>
        </Link>

        <div className='hidden md:block'>
          <ul className='flex gap-8 text-sm font-medium'>
            <Link to={"/"}>
              <li 
                onClick={() => setActive("Home")} 
                className={`cursor-pointer transition-colors duration-300 ${active === "Home" ? "text-purple-400" : "text-gray-300 hover:text-white"}`}
              >
                Home
              </li>
            </Link>
            <li 
                onClick={() => setActive("Pricing")} 
                className={`cursor-pointer transition-colors duration-300 ${active === "Pricing" ? "text-purple-400" : "text-gray-300 hover:text-white"}`}
            >
                Pricing
            </li>
            <li 
                onClick={() => setActive("Features")} 
                className={`cursor-pointer transition-colors duration-300 ${active === "Features" ? "text-purple-400" : "text-gray-300 hover:text-white"}`}
            >
                Features
            </li>
            <li 
                onClick={() => setActive("Blogs")} 
                className={`cursor-pointer transition-colors duration-300 ${active === "Blogs" ? "text-purple-400" : "text-gray-300 hover:text-white"}`}
            >
                News
            </li>
          </ul>
        </div>

        <div className='flex items-center gap-4'>
          <div className="relative">
              <select 
                className='bg-slate-800 text-white border border-slate-600 rounded-lg py-1 px-3 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none pr-8 cursor-pointer' 
                onChange={handler}
              >
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
              </select>
               <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">
                  ▼
              </div>
          </div>
          <button className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-sm'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nsv;