import { ReusableButtonLink } from "./columnButtons";

interface ColumnType {
  Header: string;
  accessor: string;
  sortType: string;
  Cell?: any;
}
export const dashBoardData = [
  {
    Header: "No",
    accessor: "",
    // sortType: "basic",
    Cell: ({ row }: any) => (
      <span className="py-3.5 px-4 text-sm font-medium text-gray-700">
        {row.index + 1}
      </span>
    ),
  },
  {
    // first group - TV Show
    Header: "Delivery Report",
    // First group columns
    columns: [
      {
        Header: "Name",
        accessor: "show.name",
      },
      {
        Header: "Type",
        accessor: "show.type",
      },
    ],
  },
  {
    // Second group - Details
    Header: "Details",
    // Second group columns
    columns: [
      {
        Header: "Language",
        accessor: "show.language",
      },
      {
        Header: "Genre(s)",
        accessor: "show.genres",
      },
      {
        Header: "Runtime",
        accessor: "show.runtime",
      },
      {
        Header: "Status",
        accessor: "show.status",
      },
    ],
  },
];

export const ordersColumns: ColumnType[] = [
  {
    Header: "Order No.",
    accessor: "id",
    sortType: "basic",
  },
  {
    Header: "Customer Name",
    accessor: "customer_name",
    sortType: "basic",
  },
  {
    Header: "Dispatch Status",
    accessor: "dispatch_status",
    Cell: ({ value }: any) => (
      <span
        className={`${
          value
            ? "bg-green-500 text-white p-2 rounded-md"
            : "bg-red-500 text-white p-2 rounded-md"
        }`}
      >
        {value ? "Ready for Pickup" : "Not Dispatched"}
      </span>
    ),
    sortType: "basic",
  },
  {
    Header: "Item price",
    accessor: "price",
    sortType: "basic",
  },
  {
    Header: "Item Quantity",
    accessor: "quantity",
    sortType: "basic",
  },
  {
    Header: "Action",
    accessor: "",
    sortType: "basic",
    Cell: (row: any) => (
      <span className="">
        <ReusableButtonLink
          href={"/orders/" + encodeURIComponent(row?.original?.id)}
        >
          View
        </ReusableButtonLink>
      </span>
    ),
  },
];

export const InvoiceColumns = [
  {
    Header: "Invoice Number",
    accessor: "invoice_number",
    sortBy: "basic",
  },
  {
    Header: "Account Name",
    accessor: "account_name",
    sortBy: "basic",
  },
  {
    Header: "Amount",
    accessor: "amount",
    sortBy: "basic",
  },
  {
    Header: "Date",
    accessor: "invoice_date",
    sortBy: "basic",
  },
  {
    Header: "Status",
    accessor: "status",
    sortBy: "basic",
    Cell: ({ value, isExpired }: any) => (
      <span
        className={`${
          value
            ? "inline-block px-2 py-px ml-2 text-md text-green-500 bg-green-100 rounded-md"
            : "inline-block px-2 py-px ml-2 text-md text-red-400 bg-green-100 rounded-md"
        }`}
      >
        {value ? "Paid" : isExpired ? "Expired" : "Overdue"}
      </span>
    ),
  },
];
