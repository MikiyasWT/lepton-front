import { ChartOptions } from "chart.js";
import LineChart from "./LineChart";

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: '#1ab3f9',
      backgroundColor: '#1af96c',
      fill: true,
      tension: 0.1
    },
    {
      label: 'Dataset 2',
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: '#844df2',
      backgroundColor: 'rgba(153,102,255,0.2)',
      fill: true,
      tension: 0.1
    },
  ],
};

const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'left',
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Birr',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Birr',
      },
      beginAtZero: true,
    },
  },
};


const Chart = () => {
  return (
    <div
      className="bg-white border-gray-400 shadow-xl flex-grow-0 rounded-xl overflow-y-clip"
      style={{ flex: "0 0 50%" }}
    >
      
      <LineChart
        data={data}
        options={options}
      />

    </div>
  );
};

export default Chart;