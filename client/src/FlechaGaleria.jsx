import React, { Component } from 'react';

class FlechaGaleria extends Component {
    state = {  }
    render() { 
        return (  
            <div className="FlechaGaleria" style={{left:this.props.left}}>
                <button onClick={this.props.clickHandler}>{this.props.arrow}</button>
            </div>
        );
    }
}
 
export default FlechaGaleria;