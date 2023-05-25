// import meter1 from "../../assets/img/meter1.svg";
// import meter2 from "../../assets/img/meter2.svg";
// import meter3 from "../../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import bg104 from "../../assets/img/bg-104.jpg"
import './skills.css'
import webTech from '../../webTech' 
import progLang from '../../progLang';


const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
            <div className="row">
                        <h2>Skills And <span>Experience</span></h2>
                        <div className="col-6 skill-bx">
                                <div className="item-group">
                                             <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider ">
                                        {
                                            webTech.map((data,index)=>{
                                                return(
                                                    <>
                                                        <div className="item">
                                                            <img src={data.imgUrl} alt="" />
                                                            <h5>{data.title}</h5>
                                                        </div>
                                    
                                                    
                                                    </>
                                                
                                                )
                                            })

                                        }           
                                    </Carousel>
                                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider ">
                                        {
                                            progLang.map((data,index)=>{
                                                return(
                                                    <>
                                                        <div className="item">
                                                            <img src={data.imgUrl} alt="" />
                                                            <h5>{data.title}</h5>
                                                        </div>
                                    
                                                    
                                                    </>
                                                
                                                )
                                            })

                                        }           
                                    </Carousel>

                                </div>
                               
                        </div>
                        <div className="col-6">
                                <div className="experience">
                                    <h5>2022-23</h5>
                                    <div className="profile-company">
                                        <p className="profile">Front End Developer Intern</p>
                                        <p className="company">Highbreed Development India Pvt. Ltd.</p>
                                     </div>  
                                </div>
                                <br/>
                                <div className="roles">
                                        <h4>Roles and Responsibilities:</h4>
                                            <li>Worked on Company’s v2 website and optimized code by improving code reusability</li>
                                            <li>Worked with Senior Developer to write code from scratch for clients</li>
                                            <li>Worked with Back-End Developer to edit existing projects</li>
                                            <li>Have worked with web debugging tools like Chrome Developer Console</li>
                                            <li>Learned how to minify the code – CSS and JS</li>   
                                            <li>Fixed bugs of platform of the website and worked on various areas of software product development</li>
                                            <li>Assist team with testing code in multiple browsers</li>
                                </div>
                               
                            
                        </div>
                       
                    </div>
    </section>
  )
}

export default Skills