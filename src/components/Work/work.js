import React  from  'react';
import {motion} from 'framer-motion/dist/es/index' ;
import './work.css';

import {useEffect}  from 'react';
import { useInView } from 'react-intersection-observer';
import {useAnimation}  from 'framer-motion';

const Work  =() => {

    const {ref , inView} = useInView({
        threshold:1
    });
  
    const body1 = useAnimation();
    const body2 = useAnimation();

    useEffect(() => {
        console.log("use effect hook , inView = ", inView) ;
         if(inView){
            
            body1.start({
                
    
                x: 0 ,
                transition:{delay:0.15} 
              });

              body2.start({
               
                x:0 ,
                transition:{delay:0.15}         
              });
           

         }
         if(!inView){
           
            body1.start({
              
                x: -30     
              });

              body2.start({
                
                x: 30           
              });
         }
    },[inView]);

        return(
            <div  id="work" data-aos="fade-up"  className="work">
            <div ref={ref} className="container">
                <motion.h2 
                 className="work-title"><span>My</span> Work</motion.h2>

                <motion.div  animate={body1}   whileHover={{scale:1.1}} 
                className="part first">
                    <i className="icon fa fa-chain fa-2x"></i>
                    <h4 className="part-title">Front End</h4>
                    <hr className="line"/>
                    <p className="part-desc">
                    Trained at ITI company for 2 months as a Front End developer .
                    </p>
                </motion.div>
                
                <motion.div animate={body2}  whileHover={{scale:1.1}} 
                className="part">
                    <i className="icon fa fa-bolt fa-2x"></i>
                    <h4 className="part-title">Freelance</h4>
                    <hr className="line"/>
                    <p className="part-desc">
                    Worked as a freelancer in many projects.
                    </p>
                </motion.div>
                
         
            </div>
        </div>
        )
    
}

export default Work ;