import React, { Component } from 'react';

class InfoMobile extends Component {
    state = {  
        checked: false,
        backgroundColor: 'white',
    }
    render() { 
        return (  
            <div onClick={this.checkService} className="InfoMobile" style={{backgroundColor:this.state.backgroundColor}}>
                <div>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        );
    }

    checkService = () =>{
        if(this.state.checked === false){
            this.setState({ backgroundColor: 'lightGrey'});
            this.setState({ checked: true});
            this.props.isChecked();
        }else{
            this.setState({ backgroundColor: 'white'});
            this.setState({ checked: false});
            this.props.isUnchecked();
        }
    }
}
 
export default InfoMobile;