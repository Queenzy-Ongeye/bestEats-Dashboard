"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReusableTable from "../components/tables/ReusableTable";
import { ordersColumns } from "../components/tables/tableColumns";
import CardSocial from "../components/tables/CardSocial";
import { HiOutlineTicket, HiOutlineUsers } from "react-icons/hi2";
import { IoAnalyticsOutline } from "react-icons/io5";
import { LuCircleDollarSign } from "react-icons/lu";

const Orders = () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [orderData, setOrderData] = useState<[]>([])

  useEffect(() => {
    (async () => {
      const orderData = await axios("/orderReport.json")
      setOrderData(orderData.data)
    })()
  }, [])
  return (
    <div className="mx-4">
      <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 xl:grid-cols-4">
        {/* <!-- Value card --> */}
        <div className="flex items-center justify-between p-4 bg-white rounded-md dark:bg-darker">
          <div>
            <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
              Value
            </h6>
            <span className="text-xl font-semibold">$30,000</span>
            <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
              +4.4%
            </span>
          </div>
          <div>
            <span>
              <LuCircleDollarSign className="w-12 h-12 text-gray-400 dark:text-primary-dark" />
            </span>
          </div>
        </div>

        {/* <!-- Users card --> */}
        <div className="flex items-center justify-between p-4 bg-white rounded-md dark:bg-darker">
          <div>
            <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
              Users
            </h6>
            <span className="text-xl font-semibold">50,021</span>
            <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
              +2.6%
            </span>
          </div>
          <div>
            <span>
              <HiOutlineUsers className="w-12 h-12 text-gray-400 dark:text-primary-dark" />
            </span>
          </div>
        </div>

        {/* <!-- Orders card --> */}
        <div className="flex items-center justify-between p-4 bg-white rounded-md dark:bg-darker">
          <div>
            <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
              Orders
            </h6>
            <span className="text-xl font-semibold">45,021</span>
            <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
              +3.1%
            </span>
          </div>
          <div>
            <span>
              <IoAnalyticsOutline className="w-12 h-12 text-gray-400 dark:text-primary-dark" />
            </span>
          </div>
        </div>

        {/* <!-- Tickets card --> */}
        <div className="flex items-center justify-between p-4 bg-white rounded-md dark:bg-darker">
          <div>
            <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
              Tickets
            </h6>
            <span className="text-xl font-semibold">20,516</span>
            <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
              +3.1%
            </span>
          </div>
          <div>
            <span>
              <HiOutlineTicket className="w-12 h-12 text-gray-400 dark:text-primary-dark" />
            </span>
          </div>
        </div>
      </div>
      <ReusableTable
        tableColumns={ordersColumns}
        tableData={orderData}
        title={"Order Details"}
        headers={undefined}
        path={"/orders/"} />
    </div>
  )
};

export default Orders;
