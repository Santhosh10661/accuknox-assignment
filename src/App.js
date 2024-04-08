import React, { useState } from "react";
import data from "./data.json";
import "./App.css";
import Selection from "./Selection";
import Content from "./Content";

function App() {
  const stockData = data.data;

  const [selectedItem, setSelectedItem] = useState(stockData[0]);
  const [dropDownShow, setDropDownShow] = useState(false);

  const handleSelect = (item) => {
    const getStock = stockData.filter((stock) => {
      return stock.stockName === item;
    });
    setSelectedItem(getStock[0]);
    setDropDownShow(!dropDownShow);
  };

  return (
    <div
      className="App container-fluid"
      style={{ minHeight: "100dvh" }}
      onClick={() => dropDownShow && setDropDownShow(false)}
    >
      <main className="container py-3">
        <Selection
          stockData={stockData}
          selectedItem={selectedItem}
          dropDownShow={dropDownShow}
          setDropDownShow={setDropDownShow}
          handleSelect={handleSelect}
        />
        <Content selectedItem={selectedItem} />
      </main>
    </div>
  );
}

export default App;
