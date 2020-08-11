import React, { Component } from 'react';

class Precio extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Precio" style={{left:this.props.customLeft, top:this.props.customTop}}>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
         );
    }
}
 
export default Precio;