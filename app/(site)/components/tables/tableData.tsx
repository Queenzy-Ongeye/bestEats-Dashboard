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
