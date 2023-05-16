import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from '../assets/img/img-104.png'


const Banner = () => {

    const [loopnum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Web Developer', "Web Designer"] ;
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    //Responsible for typing and deleting
    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () =>{
        let i = loopnum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopnum+1)
            setDelta(500)
        }
    }

  return (
    <>
        <section className='banner' id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I am Preeti Singh `}<span className='wrap '>{text}</span></h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, eos animi. Saepe, blanditiis praesentium mollitia dolores fugit quaerat debitis temporibus?</p>
                        <button onClick={()=>console.log('connect')}> Let's Connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>

                    </Col>
                </Row>
            </Container>
        </section>

    </>
  )
}

export default Banner
