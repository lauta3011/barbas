import React from 'react';
import Galeria from './Galeria';
import firstSlide from './imgs/img1.jpg';
import secondSlide from './imgs/img2.jpg';
import thirdSlide from './imgs/img3.jpg';
import fourthSlide from './imgs/img4.jpg';
import fifthSlide from './imgs/img5.jpg';
import sixtSlide from './imgs/img6.jpg';

function Showroom() {
    
    const images = [{name: 'sixt', src:sixtSlide},  {name:'fifth', src:fifthSlide},  {name:"first", src:firstSlide}, {name:"second",src:secondSlide},{name:"third",src:thirdSlide}, 
        {name:"fourth", src:fourthSlide} ]

    return ( 
        <div className="Showroom">
            <div className="Container">
                <h2>GALERIA</h2>
                <Galeria images={images} />
            </div>
        </div>
    );
}
 
export default Showroom;