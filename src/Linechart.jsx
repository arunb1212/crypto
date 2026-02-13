import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

const Linechart = ({ data }) => {
  const [chartData, setChartData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let copy = [["Date", "Prices"]];
    if (data.prices) {
      data.prices.map((items) => (
        copy.push([`${new Date(items[0]).toLocaleDateString().slice(0, -5)}`, items[1]])
      ));
      setChartData(copy);
    }
  }, [data]);

  const options = {
    backgroundColor: 'transparent',
    legend: { position: 'bottom', textStyle: { color: '#cbd5e1' } },
    hAxis: { textStyle: { color: '#94a3b8' } },
    vAxis: { textStyle: { color: '#94a3b8' } },
    colors: ['#a855f7'], // Purple color
    chartArea: { width: '85%', height: '80%' }
  };

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="100%"
      data={chartData}
      options={options}
      legendToggle
    />
  );
};

export default Linechart;