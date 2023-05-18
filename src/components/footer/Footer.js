import { Container, Row, Col } from "react-bootstrap";
import logo from '../../assets/img/thelogo2.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon4 from '../../assets/img/nav-icon4.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import {Link} from 'react-router-dom'
import './footer.css'

const Footer = () => {
    
  return (
    <footer className="footer" >
      <Container>
        <Row className="align-items-center" >
          <Col size={12} sm={4}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={4}>
             <p>Copyright &copy; 2023. All Rights Reserved</p>
          </Col>
          <Col size={12} sm={4} >
          <div className="social-icon">
                <Link to="https://www.linkedin.com/in/preeti-singh-a1b63b149/" className="icon">
                    <img src={navIcon1} alt="" />
                </Link>
                <Link to="https://github.com/psthegeek" className="icon">
                    <img src={navIcon4} alt=""  />
                </Link>
               <Link to="https://www.instagram.com/technophileps/" className="icon">
                    <img src={navIcon3} alt="" />  
               </Link>
                
              </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer