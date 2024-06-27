import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Services.css";
import { Image } from "react-bootstrap";
import Button from "@mui/material/Button";

const Service = () => {
  return (
    <div>
      <h1>Service</h1>
      <p>
        We are team of talented developers making websites and mobile
        applications
      </p>
      <div className="container scontainer">
        <div className="row  srow justify-content-between align-items-strech">
          <div className="col-md-3 pt-3  m-1 scol">
            <Image
              card-img-top
              height={250}
              width={250}
              src="https://img.freepik.com/free-vector/google-sitemap-concept-illustration_114360-2221.jpg?w=1380&t=st=1719429126~exp=1719429726~hmac=599ceb4462d9b0801d2981a5872fd7d07ec0c283aaa1189c45f4407923cc9ab0"
            />
            <p className="pt-3">Web Development</p>
            <Button variant="contained">Get Started</Button>
          </div>
          <div className="col-md-3 pt-3  m-1 scol">
            <Image
              card-img-top
              height={250}
              width={250}
              src="https://img.freepik.com/premium-photo/digital-online-marketing-commerce-sale-concept_1128603-1597.jpg?w=1380"
            />
            <p className="pt-3">App Development</p>
            <Button variant="contained">Get Started</Button>
          </div>
          <div className="col-md-3 pt-3  m-1 scol">
            <Image
              card-img-top
              height={250}
              width={250}
              src="https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg?t=st=1719428364~exp=1719431964~hmac=0acfb7086d9caca4ba7274767735c96240e954bb0710783e33ab917e429c5a9c&w=1380"
            />
            <p className="pt-3">Data Science</p>
            <Button variant="contained">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
