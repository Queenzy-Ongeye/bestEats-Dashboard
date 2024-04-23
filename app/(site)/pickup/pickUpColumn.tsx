import { ReusableButtonLink } from "../components/tables/columnButtons";
interface ColumnType {
    Header: string;
    accessor: string;
    sortType: string;
    Cell?: any;
  }

export const pickupColumns:ColumnType[] = [
    {
      Header: "Pick-Up No.",
      accessor: "id",
      sortType:"basic"
    },
    {
      Header: "Customer Name",
      accessor: "customer_name",
      sortType:"basic"
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
      Cell: (row: any) => (
        <span className="" >
          <ReusableButtonLink
          href={"/pickup/" + encodeURIComponent(row?.original?.id)}
          >
            View
          </ReusableButtonLink>
        </span>
      ) 
    },
  ];