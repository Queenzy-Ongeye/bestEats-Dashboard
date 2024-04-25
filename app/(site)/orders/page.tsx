"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReusableTable from "../components/tables/ReusableTable";
import { ordersColumns } from "../components/tables/tableColumns";
import CardSocial from "../components/tables/CardSocial";
import { HiOutlineTicket, HiOutlineUsers } from "react-icons/hi2";
import { IoAnalyticsOutline } from "react-icons/io5";
import { LuCircleDollarSign } from "react-icons/lu";
import SummaryCards from "../components/summarycards";
import { CardItems } from "../components/summarycards/CardItems";

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
      {CardItems.map((cardItem) => (
          <SummaryCards
            title={cardItem.title}
            figure={cardItem.figure}
            percentage={cardItem.percentage}
            icon={cardItem.icon}
          />
        ))}
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
