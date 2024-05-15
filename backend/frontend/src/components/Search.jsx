
import React, { useState } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [stockData, setStockData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        setLoading(true);
        const apiUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=${YOUR_KEY}`;

        axios.get(apiUrl)
            .then(response => {
                const searchData = response.data.bestMatches;
                setStockData(searchData);
                setLoading(false);
            })
            .catch(error => {
                console.error( error);
                setLoading(false);
            });
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter company symbol or name" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <TextField 
                id="outlined-basic" 
                label="Outlined" 
                variant="outlined"
                type="text" 
                placeholder="Enter company symbol or name" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                />

            <button onClick={handleSearch} disabled={loading}>Search</button>
            {loading && <p>Loading...</p>}
            {stockData && (
                <div>
                    <h2>Search Results:</h2>
                    <ul>
                        {stockData.map(company => (
                            <li key={company['1. symbol']}>
                                {company['1. symbol']} - {company['2. name']}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Search;
