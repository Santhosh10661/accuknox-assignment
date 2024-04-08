const COLUMNS = (data) => [
  {
    name: "Date",
    selector: (row) => row.date,
  },
  {
    name: "Open",
    selector: (row) => row.open,
    conditionalCellStyles: [
      {
        when: (row) => {
          if (row.index > 0) {
            let preRow = data[row.index - 1];
            if (row.open > preRow.close) {
              return true;
            }
          }
        },
        classNames: ["success"],
      },
      {
        when: (row) => {
          if (row.index > 0) {
            let preRow = data[row.index - 1];
            if (row.open < preRow.close) {
              return true;
            }
          }
        },
        classNames: ["fail"],
      },
    ],
  },
  {
    name: "Close",
    selector: (row) => row.close,
    conditionalCellStyles: [
      {
        when: (row) => {
          if (row.open < row.close) {
            return true;
          }
        },
        classNames: ["success"],
      },
      {
        when: (row) => {
          if (row.open > row.close) {
            return true;
          }
        },
        classNames: ["fail"],
      },
    ],
  },
];

export default COLUMNS;
