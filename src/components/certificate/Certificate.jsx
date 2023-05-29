import React from "react";
import Carousel from "react-multi-carousel";
import { certificates } from "../../minors";
import "./certificate.scss";
import "react-multi-carousel/lib/styles.css";

const Certificate = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="certificate-bx">
        <div className="col-12 skill-bx">
          <div className="item-group">
            <Carousel
              responsive={responsive}
              infinite={true}
              className="owl-carousel owl-theme certificate-slider "
            >
              {certificates.map((data, key) => {
                return (
                  <>
                    <div key={data.id}>
                      <div className="item">
                        <img src={data.imgUrl} alt="" />
                        <h5>{data.title}</h5>
                      </div>
                    </div>
                  </>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
