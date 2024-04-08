import React from "react";
import "./Css/Selection.css";
import { IoIosArrowDown } from "react-icons/io";

function Selection(props) {
  let { stockData, selectedItem, dropDownShow, setDropDownShow, handleSelect } =
    props;

  return (
    <section className="row my-2">
      <div
        className="drapDown col-12 rounded p-2 shadow-sm position-relative"
        style={{
          height: "fit-content",
          transition: "0.3s ease-in-out",
          backgroundColor: "#7F8487",
          color: "white",
        }}
      >
        <div
          className="select col-12 d-flex justify-content-between align-items-center"
          onClick={() => setDropDownShow(!dropDownShow)}
        >
          <h4 className="m-0" style={{ width: "fit-content" }}>
            {selectedItem.stockName}
          </h4>
          <span style={{ width: "fit-content", height: "fit-content" }}>
            <IoIosArrowDown
              style={{
                transform: dropDownShow ? " rotate(180deg)" : "rotate(0deg)",
                transition: " 0.3s ease-in-out",
              }}
            />
          </span>
        </div>
        <div
          className={`drapDownList rounded-bottom shadow mt-1 ${
            dropDownShow ? "show" : "hide"
          }`}
          style={{
            backgroundColor: "white",
            width: "100%",
            position: "absolute",
            left: "0",
            zIndex: "1",
            color: "black",
          }}
        >
          <ul
            className="p-0 m-0"
            style={{ fontWeight: "500", listStyle: "none" }}
          >
            {stockData.map((stock, index) => {
              return (
                <li
                  className={`p-2 ${
                    selectedItem.stockName === stock.stockName && "active"
                  }`}
                  key={index}
                  onClick={() => handleSelect(stock.stockName)}
                  style={{ cursor: "pointer" }}
                >
                  {stock.stockName}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Selection;
