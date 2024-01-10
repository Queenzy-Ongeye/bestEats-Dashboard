import React from "react";
import { Line } from "react-chartjs-2";

interface IGraph {
  data: any;
  options: any;
}

const LineGraph = ({ data, options }: IGraph) => {
  return (
    <div className="flex-auto p-4">
      <div>
        <Line data={data} options={options} height="300px" />
      </div>
    </div>
  );
};

export default LineGraph;
