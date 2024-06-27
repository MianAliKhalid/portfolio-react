import React from "react";
import "../Css/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Person from "../Images/Person.png";
import { Image } from "react-bootstrap";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <div>
      <div className="container-fluid Header ">
        <div className="row">
          <div className="col Header-col">
            <h1 className="Header-h1">Welcome to the world of</h1>
            <h1 className="Header-h1">Innovative Technology</h1>
            <p className="Header-p">
              We are team of talented developers making websites
            </p>
            <p className="Header-p">and mobile applications</p>
            <Button variant="contained">Contained</Button>
          </div>
          <div className="col Header-col2">
            <Image className="pimg" src={Person} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
