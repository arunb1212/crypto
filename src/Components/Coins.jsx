import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CoinCon } from '../../Context/CoinContext'
import Linechart from '../Linechart'
import { Spinner } from "flowbite-react";



const Coins = () => {
  let[coindata,setCoindata]=useState()
  let[chart,setChart]=useState()
let {curr} =useContext(CoinCon)

  let {coinid}=useParams()

  let fetchchart=async()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-pws2QprhyHCxf7vd3NcoYcie	'
      }
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=${curr.name.toLowerCase()}&days=10&interval=daily`, options)
      .then(res => res.json())
      .then(res => setChart(res))
      .catch(err => console.error(err));
  }

  const fetching =async ()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-pws2QprhyHCxf7vd3NcoYcie	'
      }
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinid}`, options)
      .then(res => res.json())
      .then(res => setCoindata(res))
      .catch(err => console.error(err));
      console.log()

  }

  useEffect(()=>{
fetching()
fetchchart()
  },[curr,coinid])
  
  if(coindata && chart){
    return(
      <div className='flex flex-col mt-[40px] gap-[30px] justify-center items-center '>

      <img className='w-[100px]' src={coindata.image.large} alt="" />
      <p className='text-2xl text-white'>{coindata.name}</p>
      <div className='w-[60%]'>
        <Linechart data={chart}/>
      </div>
      <div className='mt-[30px] w-[60%] flex items-center  justify-center flex-col'>
        <ul className='flex w-[60%] border-b-[1px] text-white pb-[5px] justify-between'>
          <li>Market Rank</li>
          <li>{coindata.market_cap_rank}</li>
        </ul>
        <ul className='flex w-[60%] border-b-[1px] text-white pb-[5px] justify-between'>
          <li>Current Price</li>
          <li>{curr.symbol} {coindata.market_data.current_price[curr.name.toLowerCase()]}</li>
        </ul>
        <ul className='flex w-[60%] border-b-[1px] text-white pb-[5px] justify-between'>
          <li>Market Cap</li>
          <li>{curr.symbol} {coindata.market_data.market_cap[curr.name.toLowerCase()]}</li>
        </ul>
        <ul className='flex w-[60%] border-b-[1px] text-white pb-[5px] justify-between'>
          <li>Market Cap</li>
          <li>{curr.symbol} {coindata.market_data.low_24h[curr.name.toLowerCase()]}</li>
        </ul>
        <ul className='flex w-[60%] border-b-[1px] text-white pb-[5px] justify-between'>
          <li>Market Cap</li>
          <li>{curr.symbol} {coindata.market_data.high_24h[curr.name.toLowerCase()]}</li>
        </ul>

      </div>
              </div>
    )
  }
  else{
    return(
      <div className='flex justify-center items-center h-screen'>
<p>
        <Spinner aria-label="Default status example" />;
      </p>
      </div>
      
    )
  }
}

export default Coins