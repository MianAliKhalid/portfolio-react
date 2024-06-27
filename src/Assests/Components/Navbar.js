import React from "react";
import "../Css/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-md">Home</div>
        <div className="col col-md">Portfolio</div>
        <div className="col col-md">Contact Us</div>
        <div className="col col-md">About Me</div>
        <div className="col col-md"> <Button variant="contained">Appointment</Button></div>
      </div>
    </div>
  );
};

export default Navbar;
