import "./about.scss";
import {Row} from 'react-bootstrap'
import Certificate from "../certificate/Certificate";

const About = () => {
  
  return (
    <>
      <div className="about" id="about">
        <Row>
          <h2 className="head-text-about">
                I am a <span>Frontend Web Developer</span>
                <br />
              </h2>
              <p className="p-text-about">
                I'm a React.js Developer. My goal is to build a fast, flexible,
                mobile-first website that clearly communicates with visitors. I have
                done my Btech in Computer Science and Engineering from Roorkee. I have total 6 months experience
                in the industrial field as a Frontend web developer. I have worked on Company's Product . Apart
                from this I Utilized React to build high-quality, scalable and reusable components and used React, React Hooks, Redux, React-Router for app routing.
              </p>
        </Row>
         
         <Row>
                <Certificate/>
         </Row>

      </div>
      

     </>
  )
}

export default About