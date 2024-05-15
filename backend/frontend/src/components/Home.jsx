import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
const Home = () => {
  return (
    <div >
        <Link to='/login' className="btn btn-light my-5"> 
          <Button variant="outlined" color="error">
            LogOut
          </Button>
        </Link>
    </div>
  );
};

export default Home;
