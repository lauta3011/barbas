import React, { Component } from 'react';

class InfoMobile extends Component {
    state = {  
        checked: false,
        backgroundColor: 'white',
        h1Color: 'black',
        pColor: 'grey'
    }
    render() { 
        return (  
            <div className="InfoMobile" style={{backgroundColor:this.state.backgroundColor}}>
                <div onClick={this.checkService} >
                    <h3 style={{color:this.state.h1Color}}>{this.props.title}</h3>
                    <p style={{color:this.state.pColor}}>{this.props.desc}</p>
                </div>
            </div>
        );
    }

    checkService = () =>{
        if(this.state.checked === false){
            this.setState({ checked: true});
            this.setState({ backgroundColor: 'grey'});
            this.setState({ h1Color: 'white'});
            this.setState({ pColor: 'white'});
            this.props.isChecked();
        }else{
            this.setState({ checked: false});
            this.setState({ backgroundColor: 'white'});
            this.setState({ h1Color: 'black'});
            this.setState({ pColor: 'grey'});
            this.props.isUnchecked();
        }
    }
}
 
export default InfoMobile;