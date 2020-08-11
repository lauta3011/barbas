import React, { Component } from 'react';
import Header from "./Header";
import Servicios from './Servicios';
import Showroom from './Showroom';
import AboutUs from './AboutUs';
import Footer from './Footer';
import './BaseStyle.css';
import background from './imgs/background-img.JPG';

class App extends Component {
    
    render() { 
        return (  
            <div>
                <Header />
                <Servicios />
                <AboutUs />
                <Showroom />
                <Footer />
                <img src={background} alt="background" style={{width:"100%", height:"120%",position:"fixed",zIndex:"-1",filter:"blur(5px)"}}/>
            </div>
        );
    }
}
 
export default App;