import { ChartOptions } from "chart.js";
import DonutChart from "./DonutChart";

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


const MainContentLeft = () => {
    return (
      <div className="bg-white border-gray-300 py-4 p-2 pb-40 h-screen w-1/4 rounded-xl flex flex-col gap-4">
        <div className="px-2 py-2 font-light">
          <h5 className="text-2xl font-light"> This month statistics:</h5>
          <span className=" font-thin">Tue 14, Nov 2024 14:30 AM</span>
        </div>
        <div className="flex-grow bg-white h-1/5  border-gray-300 shadow-xl  rounded-xl">
          {/* Upper Container */}
         <div className="flex flex-row justify-between p-1">
            <div>
              <span className="text-start text-blue-400 font-serif px-2">Income</span>
            </div>
            <div className="bg-gray-200 px-1 py-1 rounded-sm">
              <span className="text-end text-slate-400 font-serif">This Month</span>
            </div>
         </div>

          <hr className="mx-4 pb-4" />
          <div className="w-full h-1/3 flex flex-col gap-1">
              <div className="text-center items-center space-x-2">
                <span className="text-black text-2xl font-bold">ETB 9460.00</span>
                <sub className="text-red-500 text-lg">&#x2193;</sub>
                <sub className="text-red-500 text-lg">1.5%</sub>
              </div>
              <div className="text-center items-center">
                <span className="text-gray-400 text-sm">Compared to ETB9460 last month</span>
              </div>
              <div className="text-center items-center">
                <span className="text-gray-400 text-sm">Last Month Income</span>
                <span className="text-gray-400 text-sm">ETB 25658.00</span>
  
              </div>
          </div>


        </div>
        <div className="flex-grow h-1/2 bg-white border border-gray-100 shadow-lg rounded-xl ">
          {/* Bottom Container */}
          <DonutChart data={data} options={options} />
        </div>
      </div>
    );
  };

  export default MainContentLeft;