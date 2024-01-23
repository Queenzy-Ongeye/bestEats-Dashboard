"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReusableTable from "../components/tables/ReusableTable";
import { ordersColumns } from "../components/tables/tableColumns";

const Orders = () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [orderData, setOrderData] = useState<[]>([])

  useEffect(() => {
    (async () => {
      const orderData = await axios("/order.json")
      setOrderData(orderData.data)
    })()
  }, [])  
  console.log("data received:", orderData);
  
  return (
    <div className="mx-4">
      <ReusableTable
        tableColumns={ordersColumns}
        tableData={orderData}
        title={""}
        fileName={""}
        dateFirst={""}
        dateEnd={""}
        headers={undefined}
      />
    </div>
  )
};

export default Orders;
