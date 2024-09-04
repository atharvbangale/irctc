import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

export default function TrainPie(props) {
  const chartRef = useRef(null);

  // total = props.a + props.b + props.c ;

  useEffect(() => {
    let total = 4000 ;
    if (chartRef && chartRef.current) {
      const chartConfig = {
        type: "doughnut",
        data: {
          labels: ["c sleeper","total"],
          datasets: [
            {
              data: [props.cal, total],
              backgroundColor: [props.col , "#36A2EB"],

              aspectRatio: 1,
              cutout: "70%",



              borderWidth: 8,



              borderRadius: 20,

              hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
          ],
        },
      };
      const chart = new Chart(chartRef.current, chartConfig);
      return () => {
        chart.destroy();
      };
    }
  }, [chartRef]);

  return (
    <div className="container-fluid w-75  mt-5 me-3 d-flex flex-column  align-items-center">
      <h3 className="fw-bold text-info-emphasis">{props.name}</h3>
      <canvas ref={chartRef} />

    </div>
  )
}
