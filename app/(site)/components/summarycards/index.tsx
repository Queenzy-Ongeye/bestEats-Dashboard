import React from "react";
import { IconType } from "react-icons";

interface ICards {
  title: string;
  figure: number | any;
  percentage: string;
  icon: IconType | any;
}

const SummaryCards = ({ title, figure, percentage, icon: Icon }: ICards) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-md dark:bg-darker">
      <div>
        <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
          {title}
        </h6>
        <span className="text-xl font-semibold text-black">{figure}</span>
        <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
          {percentage}
        </span>
      </div>
      <div>
        <span
          className=" text-gray-400 dark:text-primary-dark"
          aria-hidden="true"
        >
          {Icon}
        </span>
      </div>
    </div>
  );
};

export default SummaryCards;
