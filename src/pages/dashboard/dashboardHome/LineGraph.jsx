import { Chart as ChartJS, CategoryScale, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from "chart.js"

import { Line } from "react-chartjs-2";

export const LineGraph = () => {


    const lineChartData = {
        labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ],
        datasets: [
            {
                label: "Monthly Buy",
                data: [3000, 5000, 1000, 8000, 4000, 9000],
                borderColor: "rgb(75, 192, 192)",
            },
            
            {
                label: "Monthly Sell",
                data: [1000, 3000, 4000, 4000, 6000, 7000],
                borderColor: "rgb(75, 192, 192)",
            },

        ]
    }


    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    )
    const options = {}

    return <>
        <Line options={options} data={lineChartData} ></Line>
    </>
}