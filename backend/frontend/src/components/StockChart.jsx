
import React, { useEffect, useState } from "react";

const StockChart = ({ symbol }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (symbol) {
      fetchStockData(symbol);
    }
  }, [symbol]);

  const fetchStockData = async (symbol) => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=9SZNEGDFDWL3NQ53`
      );
      if (!response.ok) {
        throw new Error("Failed");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Stock Chart for {symbol}</h2>
    </div>
  );
};

export default StockChart;
