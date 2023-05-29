import React from 'react'
import MyNavbar from '../herosection/MyNavbar';
import Banner from '../herosection/Banner';
import Skills from '../skills/Skills'
import Projects from '../projects/Projects'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import './home.scss'
import About from '../about/About';
// import Portfolio from '../portfolio/Portfolio'

const Home = () => {
  return (
    <>
        <div className="home">
           <MyNavbar/>
        <div className="sections">
           <Banner/>
           <About/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>  
        </div>    

    </>
  )
}

export default Home
