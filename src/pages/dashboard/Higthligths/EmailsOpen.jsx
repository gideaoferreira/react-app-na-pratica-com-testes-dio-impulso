import React from 'react';
import ReactApexChart from "react-apexcharts";

const EmailsOpen = () => {
  const state = {
          
    series: [11, 32, 45, 32, 34, 52, 4],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: 'pie',
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'months',
        categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  
  };

  return (
    <div>
      <ReactApexChart
        height="346px" 
        options={state.options}
        series={state.series}
        type="pie"
      />
    </div>
  )
}

export default EmailsOpen;