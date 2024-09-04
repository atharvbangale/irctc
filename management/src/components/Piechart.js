
import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
export default function Piechart(props) {
    const chartRef = useRef(null);
    useEffect(() => {
        if (chartRef && chartRef.current) {
            const chartConfig = {
                type: "doughnut",
                data: {
                    labels: ["Mumbai", "Pune", "Channai", 'Delhi'],
                    datasets: [
                        {
                            data: [props.m, props.p, props.c, props.d],
                            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#AEbb58"],

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
        <div className="container w-75 mt-4">
        
            <canvas ref={chartRef} />

        </div>

    )
}
