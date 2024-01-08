import React from "react";
import { IconType } from "react-icons";

interface ICards {
  title: string;
  figure: number;
  percentage: string;
  icon: IconType;
}

const Carda = ({ title, figure, percentage, icon: Icon }: ICards) => {
  return (
    <div className="w-full px-6 py-6 mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 font-sans text-sm font-semibold leading-normal">
                      {title}
                    </p>
                    <h5 className="mb-0 font-bold">
                      {figure}
                      <span className="text-sm leading-normal font-weight-bolder text-lime-500">
                        {percentage}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                    <Icon
                      className="h-[70%] w-[70%] text-lg relative text-white"
                      aria-hidden="true"
                    />
                    <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carda;
