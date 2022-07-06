import React from 'react';
import ReactApexChart from "react-apexcharts";

const MyCharts = () => {
  const state = {
          
    series: [{
      name: 'Leads em 2021',
      data: [11, 32, 45, 32, 34, 52, 4],
      // color: '#1565C0'
    }, {
      name: 'Leads em 2022',
      data: [31, 40, 28, 51, 42, 109, 4],
      // color: '#F44336'
    }],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: 'area'
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
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
        options={state.options}
        series={state.series}
        type="area"
      />
    </div>
  )
}

export default MyCharts;