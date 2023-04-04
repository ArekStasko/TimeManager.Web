import React from 'react';
import {Bar} from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'

const BarChart = ({data}) => {
    return (
        <div className="barchart" >
            <Bar
            data={data}
            options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        duration: 2000,
                        easing: "easeInBounce",
                    },
                    title: {
                        display: true,
                        text: "Users Gained between 2016-2020"
                    },
                    scales: {
                        xAxes: [
                            {
                                scaleLabel: {
                                    display: true,
                                    labelString: "Months",
                                },
                                stacked: "true",
                            },
                        ],
                        yAxes: [
                            {
                                scaleLabel: {
                                    display: true,
                                    labelString: "Values",
                                },
                                stacked: "true",
                            },
                        ],
                    },
            }}
            />
        </div>
    )
}

export default BarChart;