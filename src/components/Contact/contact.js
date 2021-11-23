import React from  'react';
import emailjs from 'emailjs-com' ;
import './contact.css' ;
import {motion} from 'framer-motion/dist/es/index' ;
export default function Contact(){
    
 
  
   function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_yuw70rn', 'template_l13wzii', e.target , 'user_lCp2aDRJsQP3oE0gAEhlv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    return(
        
        <div className="drop">
            <div className="container">

                <motion.h2 initial={{opacity:0 ,x:350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.1}} 
                className="drop-title"><span>Drop </span>Me A line</motion.h2>

                <motion.p initial={{opacity:0 ,x:-350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.3}} 
                className="Question">Have a question or want to work together?</motion.p>


                <form onSubmit={sendEmail}>
                    <div className="form-input">
                        <motion.input initial={{opacity:0 ,x:250 }} animate={{opacity:1 ,x:0}} transition={{delay:0.3}} 
                        type="text" placeholder="Your Name" name="name"/>
                        <motion.input initial={{opacity:0 ,x:-250 }} animate={{opacity:1 ,x:0}} transition={{delay:0.4}} 
                        type="email" placeholder="Your Email" name="email"/>
                        
                    </div>
                    
                    <motion.textarea initial={{opacity:0 ,y:150 }} animate={{opacity:1 ,y:0}} transition={{delay:0.5}} 
                    cols="30" rows="10" placeholder="Your Message" name="message"></motion.textarea>
                    <motion.input initial={{opacity:0 ,y:-150 }} animate={{opacity:1 ,y:0}} transition={{delay:0.6}} 
                     type="submit" className="sendmess" value="Send Message"/>
                </form>


            </div>
         </div>
    )
    }
    

