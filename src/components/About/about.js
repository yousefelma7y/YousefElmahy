import React , {Component} from  'react';
import {motion} from 'framer-motion/dist/es/index' ;
import './about.css';

class About extends Component {
    render() {
        return(
        
            <div id="about" className="creative">
            <div className="container">
                <div className="creative-info">

                    <motion.h2 initial={{opacity:0 ,x:150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.1}} 
                    className="info-title"><span>This is</span> Me</motion.h2>

                    <motion.h4 initial={{opacity:0 ,x:-150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.2}} 
                    className="info-dir">Web Developer</motion.h4>

                    <motion.p initial={{opacity:0 ,y:150 }} animate={{opacity:1 ,y:0}} transition={{delay:0.3}} 
                    className="info-desc">
                    I'm a Full-Stack Web Developer in Egypt. I have been performing as a web 
                    developer for 2 years and am still in the 
                    process of gaining more experience through more years. As you're reading this,
                     I'm working to develop my skills.
                    </motion.p>
                </div>
            </div>
          </div>
        
     
        )
    }
}

export default About ;
