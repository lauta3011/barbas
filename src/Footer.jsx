import React, { Component } from 'react';
import Logo from './Logo';
import igLogo from './imgs/instagram-logo.png';

class Footer extends Component {
    state = {  }
    render() { 
        return (  
            <div className="Footer">
                <div className="Container">
                    <div>
                        <Logo />
                        <a href="https://www.instagram.com/barbas_rb_/?hl=es-la"><img className="igLogo" src={igLogo} alt="instagram logo"/></a>
                    </div>
                </div><br/>
                <h3>DESARROLLO @ <a href="https://lauta3011.github.io/new-portfolio/" style={{color:"white"}}>LAUTARO RODRIGUEZ</a></h3>
            </div>
        );
    }
}
 
export default Footer;