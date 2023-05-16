import './App.css';
import MyNavbar from './components/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <>
        <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}/>
            <Route index element={<App />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />          
          </Routes>
      </BrowserRouter>
          <MyNavbar/>
          <Banner/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/> 
        </div>
        

    </>
        

        
  );
}

export default App;
