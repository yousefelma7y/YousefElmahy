import React , {useState} from  'react';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion/dist/es/index' ;
import {TiThMenu} from 'react-icons/ti' ;
import {AiOutlineCloseCircle} from 'react-icons/ai' ;

import './navbar.css';
import image1 from '../../images/Y.png';

const Navbar = () => { 

   const animateFrom = {opacity : 0 , y :-40}
    const animateto = {opacity : 1 , y :1}

 
  
    const [isMobile, setIsMobile]= useState(false);


    return(
    <div className="navbar">

      

        <motion.div initial={{opacity:0}} animate={{opacity:1,x:50 }} transition={{delay:0.1}} 
        className="logo">
          <img className="logo-img" alt="logo" src={image1} />
          <p className="logo-text">
            Yousef Elmahy
          </p>
        </motion.div>

        <motion.ul 
       
        className={isMobile ? "nav-links-mobile" : "nav-links"}
         onClick={() => setIsMobile(false)}
        > 
          <motion.li initial ={animateFrom}
                  animate={animateto}
                  transition={{delay:0.05}}
                  whileHover={{scale:1.1}}
                  className="list-item"> <Link to="/">Home</Link> </motion.li>

          <motion.li initial ={animateFrom}
                  animate={animateto}
                  transition={{delay:0.10}}
                  whileHover={{scale:1.1}}
                  className="list-item"><a href="/#work">Work</a> </motion.li>

          <motion.li initial ={animateFrom}
                  animate={animateto}
                  transition={{delay:0.20}}
                   whileHover={{scale:1.1}} 
                   className="list-item"><a href="/#portfolio">Portfolio</a> </motion.li>

          <motion.li initial ={animateFrom}
                  animate={animateto}
                  transition={{delay:0.30}} 
                  whileHover={{scale:1.1}} 
                   className="list-item"><a href="/#resume">Resume</a> </motion.li>

          <motion.li initial ={animateFrom}
                  animate={animateto}
                  transition={{delay:0.40}}
                  whileHover={{scale:1.1}} 
                  
                   className="list-item"><a href="/#about">About</a> </motion.li>

          <motion.li initial ={animateFrom}
                  animate={animateto}
                  transition={{delay:0.50}}  
                  whileHover={{scale:1.1}} 
                   className="list-item"><Link to="/contact">Contact</Link> </motion.li>

        </motion.ul>

        <motion.button animate={{x:-50 }} transition={{delay:0.1}}
         className="nav-button" 
          onClick={()=> setIsMobile(!isMobile)} > 
          {isMobile ? (  <AiOutlineCloseCircle/>  ):(  <TiThMenu/> )}
       </motion.button>

      </div>
    
  )
    
}
 
export default Navbar ;