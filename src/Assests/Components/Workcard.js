import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../Css/Work.css'
import Button from "@mui/material/Button";
import { Image } from "react-bootstrap";

const Workcard = (props) => {
  return (
    
      <div className="col-4">
                    <div className="card workcard">
                        <Image className="card-img-top img-size" src={props.img} />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <Button variant="contained">Learn More</Button>
                        </div>
                    </div>
                </div>
            
        
  )
}

export default Workcard
