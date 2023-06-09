import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from "../../assets/img/img-104.png";
import "./banner.scss";
import { init } from "ityped";
import resume from "../../assets/img/resume.pdf";

const Banner = () => {
  // const url = "https://drive.google.com/drive/u/1/my-drive"

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer"],
    });
  }, []);

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col sm={12} xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{`Hi I am Preeti Singh `}</h1>
              <h3>
                Web <span ref={textRef}></span>
              </h3>
              <p>
                Welcome to my Portfolio. I am an enthusiastic and motivated
                individual who wants to explore the new areas and work in a
                dynamic stable organization.
              </p>

              <a
                href={resume}
                download="Resume"
                style={{ textDecoration: "none" }}
              >
                <button className="get-resume-btn" formTarget="_blank">
                  {" "}
                  GET RESUME
                </button>
                {/* onClick={() => { window.location.href = url; } }         */}
              </a>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header Img" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner;
