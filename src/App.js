import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Projects from './components/projects/Projects'
// import Contact from './components/Contact'
import Home from './components/home/Home'

function App() {
  
  return (
    <>    
          <Home/>
          <Routes>
             <Route path="projects" element={<Projects />} />
          </Routes>
    </>
        

        
  );
}

export default App;
