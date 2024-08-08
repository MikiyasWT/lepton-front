import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

interface LineChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      fill?: boolean;
    }[];
  };
  options?: ChartOptions<'line'>;
}

const LineChart: React.FC<LineChartProps> = ({ data, options }) => {
  return <Line data={data} options={options} />;
};

export default LineChart;