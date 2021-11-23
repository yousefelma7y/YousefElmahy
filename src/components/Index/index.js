import React , {Component} from  'react';

import Home from './../Home/home'
import About from './../About/about'
import Profile from './../Profile/Profile'
import Portfolio from '../Portfolio/Portfolio'
import SocialMedia from './../SocialMedia/SocialMedia'
import Work from './../Work/work'


class Index extends Component {
    render() {
        return(
            <div>
                <Home/>
                <Work/>
                <Portfolio/>
                <Profile/>
                <About/>
                <SocialMedia/>
               
          
            </div>
          
          
        )
    }
}

export default Index ;
