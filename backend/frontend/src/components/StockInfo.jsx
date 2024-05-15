
import React, { useEffect, useState } from "react";

const StockInfo = ({ symbol }) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (symbol) {
      fetchStockInfo(symbol);
    }
  }, [symbol]);

  const fetchStockInfo = async (symbol) => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=CYZ46BTHO6X9FX6O`
      );
      if (!response.ok) {
        throw new Error("Failed");
      }
      const jsonData = await response.json();
      setInfo(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Stock Info for {symbol}</h2>
      {info && (


          <Card variant="outlined" sx={{ maxWidth: 360 }}>
            <Box sx={{ p: 2 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography gutterBottom variant="h5" component="div">
                  Name:{info.Name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  PE Ratio: {info.PERatio}
                </Typography>
              </Stack>
              <Typography color="text.secondary" variant="body2">
                  Exchange: {info.Exchange}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                  Sector: {info.Sector}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                Pinstriped corn
                <Typography color="text.secondary" variant="body2">
                  Industry:  {info.Industry}
                  Market Cap:  {info.MarketCapitalization}
                </Typography>

              </Typography>
            </Box>
            <Divider />
            
          </Card>
      )}
      
    </div>
  );
};

export default StockInfo;
