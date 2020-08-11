import React, { Component } from 'react';
import Logo from './Logo';

class Footer extends Component {
    state = {  }
    render() { 
        return (  
            <div className="Footer">
                <div className="Container">
                    <div>
                        <Logo />
                    </div>
                </div><br/>
                <h3>DESARROLLO @ <a href="https://lauta3011.github.io/new-portfolio/" style={{color:"white"}}>LAUTARO RODRIGUEZ</a></h3>
            </div>
        );
    }
}
 
export default Footer;