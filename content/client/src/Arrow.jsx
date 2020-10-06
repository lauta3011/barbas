import React, { Component } from 'react';

class Arrow extends Component {
    state = {  }
    render() { 
        return (  
            <div className="Arrow" style={{left:this.props.left}}>
                <button onClick={this.props.clickHandler}>{this.props.arrow}</button>
            </div>
        );
    }
}
 
export default Arrow;