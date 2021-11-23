import React  from  'react';
import {motion} from 'framer-motion/dist/es/index' ;


import './home.css';
 




const Home =(props)=> {


  

    
        return(
            <div className="home">
            <div className="container">
                <motion.div  
                className="home-information">

                    <motion.h2 initial={{opacity:0 ,y:-150 }} animate={{opacity:1 ,y:0}} transition={{delay:0.2}} 
                    className="home-title margin-bottom">Yousef Elmahy</motion.h2>

                    <motion.h4 initial={{opacity:0 ,x:-350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.3}} 
                     className="home-info">Web Developer</motion.h4>

                    <motion.p initial={{opacity:0 ,x:350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.5}} 
                    className="home-desc">
                        Iam a professional <span>Full-Stack Web Developer</span> creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </motion.p>


                    <br/>
                   
                    <motion.a initial={{opacity:0 ,y:350 }} animate={{opacity:1 ,y:0}} transition={{delay:0.6}} 
                    className="home-btn" href="/#work">
                        Let's Begin
                    </motion.a>   
              
                    
                </motion.div>
            </div>
        </div>
        )
    
    
                }

export default Home ;