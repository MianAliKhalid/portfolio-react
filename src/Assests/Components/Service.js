import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Services.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Service = () => {
  return (
    <div>
      <h1>Service</h1>
      <p className="mt-2 mb-3">
        We are team of talented developers making websites, mobile applications
        and expert in Data Science
      </p>

      <div className="container  scontainer">
        <div className="row srow  justify-content-between">
          <div className="col-md-3 mt-4">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://img.freepik.com/premium-photo/digital-online-marketing-commerce-sale-concept_1128603-1597.jpg?w=1380"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Web Development
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus corrupti aliquid perferendis blanditiis cupiditate
                  repudiandae fugiat labore vero atque officia.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">More Details</Button>
              </CardActions>
            </Card>
          </div>
          <div className="col-md-3 mt-4">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg?t=st=1719428364~exp=1719431964~hmac=0acfb7086d9caca4ba7274767735c96240e954bb0710783e33ab917e429c5a9c&w=1380"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  App Development
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Totam vitae alias enim quia dolore iure voluptate. Quidem,
                  nesciunt. Sit, magni!
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">More Details</Button>
              </CardActions>
            </Card>
          </div>
          <div className="col-md-3 mt-4">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://img.freepik.com/free-vector/google-sitemap-concept-illustration_114360-2221.jpg?w=1380&t=st=1719429126~exp=1719429726~hmac=599ceb4462d9b0801d2981a5872fd7d07ec0c283aaa1189c45f4407923cc9ab0"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Data Science
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti culpa odio tempore repudiandae, doloribus magni omnis
                  ut reiciendis nam illo.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">More Details</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
