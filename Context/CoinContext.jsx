import React, { useContext,createContext, useState, useEffect } from "react";

export let CoinCon=createContext()


export let CoinProvider=({children})=>{

    let [coin,setCoin]=useState([])
    let[curr,setcurr]=useState({
        name:"usd",
        symbol:"$"
    })


    let fetchCoin=()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': 'CG-pws2QprhyHCxf7vd3NcoYcie	'
            }
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curr.name}`, options)
            .then(res => res.json())
            .then(res => setCoin(res))
            .catch(err => console.error(err));


    }


    useEffect(()=>{
fetchCoin()
    },[curr])
   
    let contextvalue={coin,setcurr,curr}
// console.log(coin)
    return(
        <CoinCon.Provider value={contextvalue} >
       {children}
        </CoinCon.Provider>
    )
}


