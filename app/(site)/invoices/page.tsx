"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReusableTable from "../components/tables/ReusableTable";
import { InvoiceColumns } from "../components/tables/tableColumns";

interface Invoice {
  invoice_number: number;
  account_name: string;
  amount: string;
  invoice_date: string;
  status: boolean;
}

const InvoicePage = () => {
  const [invoiceData, setInvoiceData] = useState<[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const invoiceData = await axios("/orderReport.json");
        setInvoiceData(invoiceData.data);
      } catch (error) {
        console.error("Error fetching invoice data:", error);
      }
    })();
  }, []);
  console.log("Data is here : ", invoiceData);

  return (
    <div>
      <ReusableTable
        tableColumns={InvoiceColumns}
        tableData={invoiceData}
        path={""}
        headers={"Invoices"}
        title={"Invoice Details"}
      />
    </div>
  );
};

export default InvoicePage;
