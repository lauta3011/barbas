import React, { Component } from 'react';
import Galeria from './Galeria';
import firstSlide from './imgs/gordito-barbon.jpg';
import secondSlide from './imgs/barber-vibe.jpg';
import thirdSlide from './imgs/barber-pole.jpg';

class Showroom extends Component {
    state = { 
        images : [ {name:"first", src:firstSlide}, {name:"second",src:secondSlide},{name:"third",src:thirdSlide}, {name:"fourth", src:firstSlide} ]
     }
    render() { 
        return ( 
            <div className="Showroom">
                <div className="Container">
                    <h2>GALERIA</h2>
                    <Galeria images={this.state.images} />
                </div>
            </div>
         );
    }
}
 
export default Showroom;