import React from "react";
import "./Css/Content.css";
import COLUMNS from "./TableContent";
import DataTable from "react-data-table-component";

function Content(props) {
  let { selectedItem } = props;
  const data = selectedItem.info;

  const columns = COLUMNS(data).map((column) => ({
    ...column,
    center: true,
  }));

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#7F8487",
        padding: "1em",
      },
    },
    rows: {
      style: {
        minHeight: "fit-content",
        padding: "1em",
        cursor: "text",
      },
    },
    headCells: {
      style: {
        fontWeight: "700",
        fontSize: "14px",
        color: "white",
        textTransform: "uppercase",
      },
    },
    cells: {
      style: {
        padding: "0",
        fontWeight: "500",
        fontSize: "16px",
      },
    },
  };

  const conditionalRowStyles = [
    {
      when: (row) => {
        if (row.index % 2 === 0) {
          return true;
        }
      },

      style: {
        backgroundColor: "white",
      },
      classNames: ["LtoR"],
    },
    {
      when: (row) => {
        if (row.index % 2 !== 0) {
          return true;
        }
      },
      style: {
        backgroundColor: "#f5f5f5",
      },
      classNames: ["RtoL"],
    },
  ];

  return (
    <section className="content row my-3 bg-white rounded shadow-sm">
      <DataTable
        className="position-relative overflow-hidden p-0"
        columns={columns}
        data={data.map((row, index) => ({ ...row, index }))}
        customStyles={customStyles}
        conditionalRowStyles={conditionalRowStyles}
        paginationPerPage={5}
        paginationRowsPerPageOptions={[3, 5, 10]}
        pagination
      ></DataTable>
    </section>
  );
}

export default Content;
