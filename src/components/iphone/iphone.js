import React , {Component} from  'react';

import './iphone.css' ;
import image4 from '../../images/project 4.png';

class Iphone extends Component {
    render() {
        return(
        <div className="drop">
        <img className="iphone" alt="iphone proj" src={image4} />
         </div>
        )
    }
}

export default Iphone ;