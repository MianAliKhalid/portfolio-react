import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Work.css";
import work from "../Json/work.json";
import Workcard from "./Workcard";

const Work = () => {
  return (
    <div>
      <h1 className="workHeading">Latest Work</h1>
      <div className="container workcontainer">
        <div className="row workrow">
          {work.map((element, index) => {
            return (
              <Workcard
                key={index}
                img={element.src}
                title={element.title}
                description={element.description}
              />
            );
          })}

          {/* <div className="col-4">
                    <div className="card workcard">
                        <Image className="card-img-top img-size" src="https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg?t=st=1719428364~exp=1719431964~hmac=0acfb7086d9caca4ba7274767735c96240e954bb0710783e33ab917e429c5a9c&w=1380" />
                        <div className="card-body">
                            <h5 className="card-title">Web Development</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Button variant="contained">Contained</Button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card workcard">
                        <Image className="card-img-top img-size" src="https://img.freepik.com/premium-photo/digital-online-marketing-commerce-sale-concept_1128603-1597.jpg?w=1380" />
                        <div className="card-body">
                            <h5 className="card-title">Web Development</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Button variant="contained">Contained</Button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card workcard">
                        <Image className="card-img-top img-size" src="https://img.freepik.com/free-vector/google-sitemap-concept-illustration_114360-2221.jpg?w=1380&t=st=1719429126~exp=1719429726~hmac=599ceb4462d9b0801d2981a5872fd7d07ec0c283aaa1189c45f4407923cc9ab0" />
                        <div className="card-body">
                            <h5 className="card-title">Web Development</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Button variant="contained">Contained</Button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card workcard">
                        <Image className="card-img-top img-size" src="https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg?t=st=1719428364~exp=1719431964~hmac=0acfb7086d9caca4ba7274767735c96240e954bb0710783e33ab917e429c5a9c&w=1380" />
                        <div className="card-body">
                            <h5 className="card-title">Web Development</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Button variant="contained">Contained</Button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card workcard">
                        <Image className="card-img-top img-size" src="https://img.freepik.com/premium-photo/digital-online-marketing-commerce-sale-concept_1128603-1597.jpg?w=1380" />
                        <div className="card-body">
                            <h5 className="card-title">Web Development</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Button variant="contained">Contained</Button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card workcard">
                        <Image className="card-img-top img-size" src="https://img.freepik.com/free-vector/google-sitemap-concept-illustration_114360-2221.jpg?w=1380&t=st=1719429126~exp=1719429726~hmac=599ceb4462d9b0801d2981a5872fd7d07ec0c283aaa1189c45f4407923cc9ab0" />
                        <div className="card-body">
                            <h5 className="card-title">Web Development</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Button variant="contained">Contained</Button>
                        </div>
                    </div>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default Work;
