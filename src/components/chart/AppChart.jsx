import React, {PropsWithChildren} from 'react';
import ReactApexChart from "react-apexcharts";

export const AppChart:  React.FC<PropsWithChildren> = ({series, options, type}) => {
  return (
    <div>
      <h6> Comparativo anual </h6>
      <hr></hr>
      <ReactApexChart
        options={options}
        series={series}
        type={type}
      />
    </div>
  )
}