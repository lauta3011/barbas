import React, { Component } from 'react';

class InfoMobile extends Component {
    state = {  }
    render() { 
        return (  
            <div className="InfoMobile">
                <div>
                    <h3>{this.props.type}</h3>
                    <p>{this.props.price}</p>
                </div>
            </div>
        );
    }
}
 
export default InfoMobile;