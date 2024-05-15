import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const SearchBar = ({ onSymbolChange }) => {
  const [symbol, setSymbol] = useState("");

  const handleChange = (e) => {
    setSymbol(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSymbolChange(symbol.toUpperCase());
    setSymbol("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <TextField
          id="outlined-basic" 
          label="Outlined" 
          variant="outlined"
          type="text" 
          placeholder="Enter company symbol or name" 
          value={symbol} 
          onChange={handleChange}
                />
        
        
        &nbsp;&nbsp;
        <Button className="mt-2" type="submit" variant="outlined" color="success">
            Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
