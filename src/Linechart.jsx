import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";

const Linechart = ({data}) => {
    let[Data,setData]=useState([["Date","Prices"]])

    useEffect(()=>{
        let copy=[["Date","Prices"]]
        if(data.prices){
            data.prices.map((items)=>(
                copy.push([`${new Date(items[0]).toLocaleDateString().slice(0,-5)}`,items[1]])
            ))
            setData(copy)
        }
    }, [data])
  return (
    <Chart
    chartType="LineChart"
    data={Data}
    height="100%"
    legendToggle
    />
  )
}

export default Linechart