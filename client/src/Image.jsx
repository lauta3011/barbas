import React, { Component } from 'react';

class Image extends Component {
    state = {  }
    render() { 
        return (  
            <div className="Image">
                <img src={this.props.img} alt=""/>
            </div>
        );
    }
}
 
export default Image;