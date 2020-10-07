import React, { Component } from 'react';
import Logo from './Logo';
import './BaseStyle.css';
import image from './imgs/header-img.JPEG';

class Header extends Component {
    state = {  }
    render() { 
        return (  
            <div className="Header">
                <div>

                    <div style={{ backgroundImage: "linear-gradient(to right, black, transparent), url(" + image + ")",position: "absolute",height: "100%",width: "100%",backgroundSize: "cover",filter: "blur(5px)"}}></div>
                        <Logo />
                </div>
            </div>
        );
    }
}
 
export default Header;