import React, { Component } from 'react';
import FlechaGaleria from './FlechaGaleria';
import Image from './Image';

class Galeria extends Component {
    state = { 
        images : this.props.images
     }
    render() { 
        return (  
        <div className="Galeria">
           <div className="ImageContainer">
                <div>{this.state.images.map(image => (
                    <Image img={image.src} key={image.name}/>
                    ))}
                </div>
            </div> 

            <FlechaGaleria clickHandler={() => this.scrollGalery("<")} arrow="<" left="2%"/>
            <FlechaGaleria clickHandler={() => this.scrollGalery(">")} arrow=">" left="95%"/>
        </div>
        );
    }

    scrollGalery = (direction) =>{
        var x = document.querySelector(".Galeria");

        if(direction === ">"){
            x.scrollBy({top:0, left:430,behavior:'smooth'});
        }else{
            x.scrollBy({top:0, left:-430,behavior:'smooth'});
        }
    }
}
 
export default Galeria;