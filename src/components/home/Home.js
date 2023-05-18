import React from 'react'
import MyNavbar from '../herosection/MyNavbar';
import Banner from '../herosection/Banner';
import Skills from '../skills/Skills'
import Projects from '../projects/Projects'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <>
          <MyNavbar/>
          <Banner/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>

    </>
  )
}

export default Home
