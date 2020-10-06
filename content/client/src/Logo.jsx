import React, { Component } from 'react';
import image from './imgs/barbas-logo.png';

class Logo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Logo">
                <div>
                    <img alt="logo" src={image}/>
                    <h1>BARBAS</h1>
                    <h3>BARBER SHOP</h3>
                </div>
            </div>                     
        );
    }
}
 
export default Logo;