import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
    }[];
  };
  options?: ChartOptions<'doughnut'>;
}

const DonutChart: React.FC<DonutChartProps> = ({ data, options }) => {
  return <Doughnut data={data} options={options} />;
};

export default DonutChart;

const data = {
    labels: ['Fiction', 'Self Help', 'Business'],
    datasets: [
      {
        label: '# of Votes',
        data: [20, 40, 46],
        backgroundColor: [
          '#17c52b',
          '#1f1fe2',
          '#df1313',
        ],
        borderColor: [
          '#17c52b',
          '#1f1fe2',
          '#df1313',
        ],
        borderWidth: 0,
      },
    ],
  };
  
  const options: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 20,
          boxHeight: 20,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };