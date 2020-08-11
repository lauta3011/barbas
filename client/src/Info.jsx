import React, { Component } from 'react';

class Info extends Component {
    state = { 
        checked : false
     }
    render() { 
        return (
            <div className="Info">
                <div onClick={this.checkService} className={this.props.serviceType} style={this.props.stylesheet}>
                    <div>
                        <input className="checkbox" type="checkbox" checked={this.state.checked} onChange={this.checkService} />
                        <h3>{this.props.title}</h3>
                        <p>{this.props.desc}</p>
                    </div>
                </div>
            </div>
        );
    }

    checkService = () =>{
        if(this.state.checked === false){
            this.setState({ checked: true});
            this.props.isChecked();
        }else{
            this.setState({ checked: false});
            this.props.isUnchecked();
        }
    }
}
 
export default Info;