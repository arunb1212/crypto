import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CoinCon } from '../../Context/CoinContext';
import Linechart from '../Linechart';
import { Spinner } from "flowbite-react";

const Coins = () => {
  const [coindata, setCoindata] = useState();
  const [chart, setChart] = useState();
  const { curr } = useContext(CoinCon);
  const { coinid } = useParams();

  const fetchchart = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-pws2QprhyHCxf7vd3NcoYcie'
      }
    };
    
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=${curr.name.toLowerCase()}&days=10&interval=daily`, options);
      const data = await response.json();
      setChart(data);
    } catch (err) {
      console.error(err);
    }
  }

  const fetching = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-pws2QprhyHCxf7vd3NcoYcie'
      }
    };
    
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinid}`, options);
      const data = await response.json();
      setCoindata(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetching();
    fetchchart();
  }, [curr, coinid]);
  
  if (coindata && chart) {
    return (
      <div className='flex flex-col items-center min-h-screen py-10 px-4'>
        <div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 w-full max-w-5xl shadow-2xl'>
            <div className='flex flex-col items-center mb-10'>
                <img className='w-24 h-24 mb-4 drop-shadow-lg' src={coindata.image.large} alt={coindata.name} />
                <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 center'>
                    {coindata.name} ({coindata.symbol.toUpperCase()})
                </h1>
                <span className='bg-slate-700 text-white px-3 py-1 rounded-full text-sm mt-3'>
                    Rank #{coindata.market_cap_rank}
                </span>
            </div>

            <div className='w-full h-[400px] mb-10 p-4 bg-slate-900/50 rounded-xl border border-slate-700'>
                <Linechart data={chart} />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mx-auto'>
                <div className='bg-slate-700/30 p-4 rounded-xl flex justify-between items-center border border-slate-600/50'>
                    <span className='text-gray-400'>Current Price</span>
                    <span className='font-mono font-bold text-xl'>{curr.symbol}{coindata.market_data.current_price[curr.name.toLowerCase()].toLocaleString()}</span>
                </div>
                <div className='bg-slate-700/30 p-4 rounded-xl flex justify-between items-center border border-slate-600/50'>
                    <span className='text-gray-400'>Market Cap</span>
                    <span className='font-mono font-bold'>{curr.symbol}{coindata.market_data.market_cap[curr.name.toLowerCase()].toLocaleString()}</span>
                </div>
                <div className='bg-slate-700/30 p-4 rounded-xl flex justify-between items-center border border-slate-600/50'>
                    <span className='text-gray-400'>24h Low</span>
                    <span className='font-mono font-bold text-red-400'>{curr.symbol}{coindata.market_data.low_24h[curr.name.toLowerCase()].toLocaleString()}</span>
                </div>
                <div className='bg-slate-700/30 p-4 rounded-xl flex justify-between items-center border border-slate-600/50'>
                    <span className='text-gray-400'>24h High</span>
                    <span className='font-mono font-bold text-green-400'>{curr.symbol}{coindata.market_data.high_24h[curr.name.toLowerCase()].toLocaleString()}</span>
                </div>
            </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Spinner aria-label="Loading..." size="xl" color="purple" />
      </div>
    )
  }
}

export default Coins;