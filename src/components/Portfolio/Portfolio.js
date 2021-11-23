import React , {Component} from  'react';
import {Link} from 'react-router-dom'
import './portfolio.css';
import image1 from '../../images/project 1.png';
import image2 from '../../images/project 2.png';
import image3 from '../../images/project 3.png';
import image4 from '../../images/project 4.png';

import {motion} from 'framer-motion/dist/es/index' ;

class Portfolio extends Component {
    
    render() {
      

        return(
            <div id="portfolio" class="portfolio">
            <motion.h2 initial={{opacity:0 ,y:-50 ,x:-60}} animate={{opacity:1 ,y:0 ,x:0 }} transition={{delay:0.05}}
             className="portfolio-title">
                 <span>My</span>  Portfolio
             </motion.h2>
         
            
            <div class="box">
                
                <motion.div initial={{opacity:0 ,y:-50 ,x:-50}} animate={{opacity:1 ,y:0 ,x:0 }} transition={{delay:0.05}}   whileHover={{y:-10}} 
                className="project-container">
                  <img className="projects" alt="project 1" src={image1} />
                    <p class="overlay">
                        <button className="show-project" onClick={()=> window.open("https://damanhour-football.netlify.app/", "_blank")}>
                            Show Project
                        </button>
                    </p>
                </motion.div>
                
                <motion.div initial={{opacity:0 ,y:-50 ,x:-50}} animate={{opacity:1 ,y:0 ,x:0 }} transition={{delay:0.1}}   whileHover={{y:-10}}
                className="project-container">
                <img className="projects" alt="project 2" src={image2} />
                    <p class="overlay">
                    <button className="show-project" onClick={()=> window.open("https://travelagency711.000webhostapp.com/", "_blank")} >
                              Show Project
                        </button>
                    </p>
                </motion.div>
                
                <motion.div initial={{opacity:0 ,y:-50 ,x:-50}} animate={{opacity:1 ,y:0 ,x:0 }} transition={{delay:0.15}}  whileHover={{y:-10}}
                 className="project-container">
                <img className="projects" alt="project 3" src={image3} />
                    <p class="overlay">
                    <button className="show-project" >
                      <Link className="showimage" to="/school">Show Image</Link>
                        </button>
                    </p>
                </motion.div>
                
                <motion.div initial={{opacity:0 ,y:-50 ,x:-50}} animate={{opacity:1 ,y:0 ,x:0 }} transition={{delay:0.2}}  whileHover={{y:-10}}
                 className="project-container">
                <img className="projects" alt="project 4" src={image4} />
                    <p class="overlay">
                    <button className="show-project" >
                      <Link className="showimage" to="/iphone">Show Image</Link>
                    </button>
                    </p>
                </motion.div>
                
               
                
            </div>
            
        </div>
        )
    }
}

export default Portfolio ;