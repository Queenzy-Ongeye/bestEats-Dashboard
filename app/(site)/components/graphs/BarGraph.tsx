import React from "react";
import { Bar } from "react-chartjs-2";
interface IBarData {
  data: any;
  options: any;
  id?: any;
}

const BarGraph = ({ data, options }: IBarData) => {
  return (
    <div className="py-2 pr-1 mb-2 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-xl">
      <div>
        <Bar data={data} height="200px" options={options} />
      </div>
    </div>
  );
};

export default BarGraph;
