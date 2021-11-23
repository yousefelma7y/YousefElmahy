import React , {Component} from  'react';

import './school.css' ;
import image3 from '../../images/project 3.png';

class School extends Component {
    render() {
        return(
        <div className="School">
           <img className="school" alt="school proj" src={image3} />
         </div>
        )
    }
}

export default School ;