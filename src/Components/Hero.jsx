import React, { useContext, useState } from 'react';
import { CoinCon } from '../../Context/CoinContext';

const Hero = ({ setDis }) => {
  const { coin } = useContext(CoinCon);
  const [input, setInput] = useState('');

  const inputHandler = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDis(coin);
    }
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    const newCoin = await coin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDis(newCoin);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6 drop-shadow-lg">
        Largest Crypto Market <br /> Over the Globe
      </h1>
      <p className="text-gray-300 text-lg mb-8 max-w-2xl leading-relaxed">
        Explore the latest trends, prices, and insights in the cryptocurrency world. 
        Track your favorite coins and stay ahead of the market.
      </p>
      
      <div className="w-full max-w-md relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <form onSubmit={searchHandler} className="relative flex items-center bg-slate-800 rounded-lg p-1">
          <input
            list="coinlist"
            className="w-full bg-transparent text-white border-none focus:ring-0 placeholder-gray-400 px-4 py-3"
            type="text"
            value={input}
            onChange={inputHandler}
            placeholder="Search for a coin..."
          />
          <datalist id="coinlist">
            {coin.map((item, index) => (<option key={index} value={item.name} />))}
          </datalist>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-md transition-all duration-300 shadow-lg transform hover:scale-105">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
