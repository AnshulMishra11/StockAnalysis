// App.js
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import StockChart from "./StockChart";
import StockInfo from "./StockInfo";
import Home from "./Home";
// import SearchBar from "./components/SearchBar";
// import StockChart from "./components/StockChart";
// import StockInfo from "./components/StockInfo";

function StockDashboard() {
  const [symbol, setSymbol] = useState("");

  const handleSymbolChange = (newSymbol) => {
    setSymbol(newSymbol);
  };

  return (
    <div className="App">
      <h1>Stock Market Dashboard</h1>
      <Home/>
      <SearchBar onSymbolChange={handleSymbolChange} />
      <StockChart symbol={symbol} />
      <StockInfo symbol={symbol} />
    </div>
  );
}

export default StockDashboard;
