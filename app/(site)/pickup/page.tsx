"use client";
import React, { useState, useEffect } from "react";
import ReusableTable from "../components/tables/ReusableTable";
import { pickupColumns } from "./pickUpColumn";
import axios from "axios";

const PickUp = () => {
  const [pickupData, setPickupData] = useState<[]>([]);

  useEffect(() => {
    (async () => {
      const pickupData = await axios("/orderReport.json");
      const dispatchResults = pickupData.data;
      const itemsStatus = dispatchResults.filter((items: any) => items.dispatch_status === true)
      setPickupData(itemsStatus)
    })();
  }, []);
  return (
    <div>
      <ReusableTable
        tableColumns={pickupColumns}
        tableData={pickupData}
        title={"Delivery Details"}
        headers={undefined}
        path={"/pickup/"}
      />
    </div>
  );
};

export default PickUp;
