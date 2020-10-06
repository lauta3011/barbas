import React, { Component } from 'react';

class Info extends Component {
    state = {  
        checked : false
    }
    render() { 
        return ( 
            <div className="Info">
                <p>{this.props.title} {this.props.desc} <input className="checkbox" checked={this.state.checked} type="checkbox" onChange={this.checkService}/></p>
            </div>
        );
    }

    checkService = () =>{
        if(this.state.checked === false){
            this.setState({ checked: true});
            this.props.handleCheckService(this.props.title, this.props.desc);
            
        }else{
            this.setState({ checked: false});
            this.props.handleUncheckService(this.props.title, this.props.desc);
        }
    }

}
 
export default Info;