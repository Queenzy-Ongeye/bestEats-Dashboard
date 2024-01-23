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

export const ordersColumns:ColumnType[] = [
  {
    Header: "Order No.",
    accessor: "id",
    sortType:"basic"
  },
  {
    Header: "Customer Name",
    accessor: "customer_name",
    sortType:"basic"
  },
  {
    Header: "Dispatch Status",
    accessor: "dispatch_status",
    Cell: ({ value }: any) => (
      <span className={`bg-${value ? 'green-500' : 'red-500'}`}>
        {value ? "Ready for Pickup" : "Not Dispatched"}
      </span>
    ),
    sortType: "basic"
  },
  {
    Header: "Item price",
    accessor: "price",
    sortType: "basic"
  },
  {
    Header: "Item Quantity",
    accessor: "quantity",
    sortType: "basic"
  },
  {
    Header: "Action",
    accessor: "",
    sortType: "basic",
    Cell: (cell: any) => (
      <span className="" >
        <ReusableButtonLink
        href={"/sms/students/" + encodeURIComponent(cell?.id)}
        >
          View
        </ReusableButtonLink>
      </span>
    ) 
  },
]