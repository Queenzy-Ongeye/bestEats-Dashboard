"use client";
import GraphPage from "./(site)/components/graphs";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuCircleDollarSign } from "react-icons/lu";
import { IoAnalyticsOutline } from "react-icons/io5";
import { HiOutlineTicket } from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "axios";
import ReusableTable from "./(site)/components/tables/ReusableTable";
import {
  dashBoardData,
  ordersColumns,
} from "./(site)/components/tables/tableColumns";
import { CardItems } from "./(site)/components/summarycards/CardItems";
import { IconBaseProps } from "react-icons";
import SummaryCards from "./(site)/components/summarycards";

export default function Home() {
  const [data, setData] = useState([]);
  const [orderData, setOrderData] = useState<[]>([]);

  useEffect(() => {
    (async () => {
      const orderData = await axios("/orderReport.json");
      setOrderData(orderData.data);
    })();
  }, []);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
    })();
  }, []);
  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 xl:grid-cols-4">
        {CardItems.map((cardItem, index) => (
          <SummaryCards
            key={index}
            title={cardItem.title}
            figure={cardItem.figure}
            percentage={cardItem.percentage}
            icon={cardItem.icon}
          />
        ))}
      </div>
      <GraphPage />
      <ReusableTable
        tableColumns={ordersColumns}
        tableData={orderData}
        title={"Delivery Details"}
        headers={undefined}
        path={"/orders/"}
      />
    </main>
  );
}
