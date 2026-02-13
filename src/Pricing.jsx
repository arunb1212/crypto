import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Pricing = ({ plan, mark1, mark2, mark3, mark4, Price }) => {
  return (
    <div className="relative flex flex-col p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 h-full">
      {plan === 'Pro' && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
          POPULAR
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-white mb-2">{plan}</h3>
      <div className="flex items-baseline mb-6">
        <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {Price || "$29"}
        </span>
        <span className="text-gray-400 ml-2">/month</span>
      </div>

      <div className="space-y-4 mb-8 flex-grow">
        <div className="flex items-center gap-3">
            <span className="text-green-400 text-xl">{mark1 || <IoMdCheckmarkCircleOutline />}</span>
            <span className="text-gray-300">Chart Preview</span>
        </div>
        <div className="flex items-center gap-3">
            <span className="text-green-400 text-xl">{mark2 || <IoMdCheckmarkCircleOutline />}</span>
            <span className="text-gray-300">Daily Blogs</span>
        </div>
        <div className="flex items-center gap-3">
            <span className="text-green-400 text-xl">{mark3 || <IoMdCheckmarkCircleOutline />}</span>
            <span className="text-gray-300">Market Analysis</span>
        </div>
        <div className="flex items-center gap-3">
            <span className="text-green-400 text-xl">{mark4 || <IoMdCheckmarkCircleOutline />}</span>
            <span className="text-gray-300">24/7 Support</span>
        </div>
      </div>

      <button className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
        plan === 'Pro' 
          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25' 
          : 'bg-slate-700 text-white hover:bg-slate-600'
      }`}>
        Choose Plan
      </button>
    </div>
  );
};

export default Pricing;
