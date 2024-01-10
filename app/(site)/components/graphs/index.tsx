"use client";
import React from "react";
import BarGraph from "./BarGraph";
import {
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { salesOptions, userOptions } from "./graphOptions";
import Chart from "chart.js/auto";
import LineGraph from "./LineGraph";
import { IoRocket } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaCreditCard } from "react-icons/fa";
import { GiLightningSpanner } from "react-icons/gi";

Chart.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const userDetailGraph = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Sales",
      tension: 0.4,
      borderWidth: 0,
      borderRadius: 4,
      borderSkipped: false,
      backgroundColor: "#fff",
      data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
      maxBarThickness: 6,
    },
  ],
};

const salesOverview = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Delivery",
      tension: 0.4,
      borderWidth: 3,
      borderColor: "#cb0c9f",
      fill: true,
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
      maxBarThickness: 6,
    },
    {
      label: "PickUps",
      tension: 0.4,
      borderWidth: 3,
      borderColor: "#3A416F",
      fill: true,
      data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
      maxBarThickness: 6,
    },
  ],
};

const GraphPage = () => {
  return (
    <div className="flex flex-wrap mt-6 mx-3">
      <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-5/12 lg:flex-none">
        <div className="border-black/12.5 shadow-soft-xl  z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div className="flex-auto p-4">
            <BarGraph data={userDetailGraph} options={userOptions} />
            <h6 className="mt-6 mb-0 ml-2">Active Users</h6>
            <p className="ml-2 text-sm leading-normal">
              (<span className="font-bold">+23%</span>) than last week
            </p>
            <div className="w-full px-6 mx-auto max-w-screen-2xl rounded-xl">
              <div className="flex flex-wrap mt-0 -mx-3">
                <div className="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0">
                  <div className="flex mb-2">
                    <div className="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-purple-700 to-pink-500 text-neutral-900">
                      <span>
                        <HiOutlineUsers className="text-lg text-white" />
                      </span>
                    </div>
                    <p className="mt-1 mb-0 text-xs font-semibold leading-tight">
                      Users
                    </p>
                  </div>
                  <h4 className="font-bold">36K</h4>
                  <div className="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
                    <div
                      className="duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0">
                  <div className="flex mb-2">
                    <div className="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-blue-600 to-cyan-400 text-neutral-900">
                      <span>
                        <IoRocket className="text-white" />
                      </span>
                    </div>
                    <p className="mt-1 mb-0 text-xs font-semibold leading-tight">
                      Clicks
                    </p>
                  </div>
                  <h4 className="font-bold">2m</h4>
                  <div className="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
                    <div
                      className="duration-600 ease-soft -mt-0.38 w-9/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0">
                  <div className="flex mb-2">
                    <div className="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-red-500 to-yellow-400 text-neutral-900">
                      <FaCreditCard className="text-white" />
                    </div>
                    <p className="mt-1 mb-0 text-xs font-semibold leading-tight">
                      Sales
                    </p>
                  </div>
                  <h4 className="font-bold">435$</h4>
                  <div className="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
                    <div
                      className="duration-600 ease-soft -mt-0.38 w-3/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all"
                      role="progressbar"
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0">
                  <div className="flex mb-2">
                    <div className="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-red-600 to-rose-400 text-neutral-900">
                      <GiLightningSpanner className="text-white" />
                    </div>
                    <p className="mt-1 mb-0 text-xs font-semibold leading-tight">
                      Items
                    </p>
                  </div>
                  <h4 className="font-bold">43</h4>
                  <div className="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
                    <div
                      className="duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 w-1/2 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all"
                      role="progressbar"
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
        <div className="border-black/12.5 shadow-soft-xl  z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
            <h6>Sales overview</h6>
            <p className="text-sm leading-normal">
              <i className="fa fa-arrow-up text-lime-500"></i>
              <span className="font-semibold">4% more</span> in 2021
            </p>
          </div>
          <LineGraph data={salesOverview} options={salesOptions} />
        </div>
      </div>
    </div>
  );
};

export default GraphPage;
