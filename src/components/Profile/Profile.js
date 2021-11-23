import React , {Component} from 'react';
import {motion} from 'framer-motion/dist/es/index' ;

import './Profile.css'

class Profile extends Component {
    render() {
        return(
            <div id="resume" className="profile_skills">
            <div className="container">
                <div className="profile">
                    <motion.h2 initial={{opacity:0 ,y:-150 }} animate={{opacity:1 ,y:0}} transition={{delay:0.1}} 
                     className="profile-title"><span>My </span>Profile</motion.h2>

                    <ul className="profile-list">
                        <motion.li initial={{opacity:0 ,x:-150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.2}} 
                        className="profile-item">
                            <span>Name</span>
                           Yousef Elmahy
                        </motion.li>
                        <motion.li initial={{opacity:0 ,x:-150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.3}} 
                         className="profile-item">
                            <span>Birthday</span>
                            7/11/2000
                        </motion.li>
                        <motion.li initial={{opacity:0 ,x:-150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.4}} 
                        className="profile-item">
                            <span>Address</span>
                            Damanhour
                        </motion.li>
                        <motion.li initial={{opacity:0 ,x:-150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.5}} 
                         className="profile-item">
                            <span>Phone</span>
                            01022361568
                        </motion.li>
                        <motion.li initial={{opacity:0 ,x:-150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.6}} 
                        className="profile-item">
                            <span>Email</span>
                            <span className="web">yousefelmahy7112000@gmail.com</span>
                        </motion.li>
                     
                    </ul>
                </div>
                
                <div className="skills">
                    <motion.h2 initial={{opacity:0 ,y:-150 }} animate={{opacity:1 ,y:0}} transition={{delay:0.1}} 
                     className="skills-title">Some <span>skills</span></motion.h2>
                    
                    <motion.div initial={{opacity:0 ,x:150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.2}} 
                    className="bar">
                        <span className="title">HTML</span>
                        <span className="perc">90%</span>
                        <div className="parent">
                            <span className="sp1"></span>
                        </div>
                    </motion.div>
                    
                    <motion.div initial={{opacity:0 ,x:150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.3}} 
                     className="bar">
                        <span className="title">CSS</span>
                        <span className="perc">75%</span>
                        <div className="parent">
                            <span className="sp2"></span>
                        </div>
                    </motion.div>
                    
                    <motion.div initial={{opacity:0 ,x:150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.4}} 
                     className="bar">
                        <span className="title">JavaScript</span>
                        <span className="perc">70%</span>
                        <div className="parent">
                            <span className="sp3"></span>
                        </div>
                    </motion.div>


                    <motion.div  initial={{opacity:0 ,x:150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.5}} 
                    className="bar">
                        <span className="title">React.js</span>
                        <span className="perc">75%</span>
                        <div className="parent">
                            <span className="sp4"></span>
                        </div>
                    </motion.div>

                    <motion.div initial={{opacity:0 ,x:150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.6}} 
                    className="bar">
                        <span className="title">Node.js</span>
                        <span className="perc">10%</span>
                        <div className="parent">
                            <span className="sp5"></span>
                        </div>
                    </motion.div>

                    <motion.div initial={{opacity:0 ,x:150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.7}} 
                     className="bar">
                        <span className="title">MongoDB</span>
                        <span className="perc">10%</span>
                        <div className="parent">
                            <span className="sp6"></span>
                        </div>
                    </motion.div>
                </div>
                
            </div>
        </div>
        )
    
    }
}

export default Profile ;