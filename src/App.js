import React  from  'react';
import { BrowserRouter , Route } from 'react-router-dom';
import './App.css';


import Navbar from './components/Navbar/navbar'
import Contact from './components/Contact/contact'
import Index from './components/Index/index'
import Footer from './components/Footer/Footer'
import School from './components/smartSchool/school'
import Iphone from './components/iphone/iphone'
import ScrollButton from './components/ScrollButton/ScrollButton';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>

        <Route exact path='/' component={Index} /> 
        <Route  path='/contact' component={Contact} />

        <Route  path='/school' component={School} />
        <Route  path='/iphone' component={Iphone} />
        <ScrollButton/>
      </BrowserRouter> 
       <Footer/>
       
      
    </div>
 
  );
}

export default App;
