import React , {Component} from  'react';

import './SocialMedia.css' ;
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

import {motion} from 'framer-motion/dist/es/index' ;

class SocialMedia extends Component {
    render() {
        return(
            <div className="social-media">
            
            <motion.button whileHover={{scale:1.1}} 
             className="social face" onClick={()=> window.open("https://www.facebook.com/yousef.elmahy.7", "_blank")}>

                   <span className="icon">  <FaFacebookF/> </span>
                <p className="social-p">
                    <span className="info1">Follow Me on</span>
                    <span className="info2">Social Facebook</span>
                </p>

            </motion.button>
            
            <motion.button whileHover={{scale:1.1}} 
             className="social github" onClick={()=> window.open("https://github.com/yousefelma7y", "_blank")}>

                  <span className="icon"> <AiFillGithub/>      </span>          
                <p className="social-p">
                    <span className="info1">Take A Look On My</span>
                    <span className="info2">Social github</span>
                </p>

            </motion.button>

            <motion.button whileHover={{scale:1.1}} 
             className="social linkedin" onClick={()=> window.open("https://www.linkedin.com/in/yousef-elmahy-605789212/", "_blank")}>

                  <span className="icon"> <AiFillLinkedin/></span>
                <p className="social-p">
                    <span className="info1">Contact With Me on</span>
                    <span className="info2">Social linkedin</span>
                </p>

            </motion.button>

       
            </div>
        )
    }
}

export default SocialMedia ;