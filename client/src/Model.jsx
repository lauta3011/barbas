import React, { Component } from 'react';
import Info from './Info';
import image from './imgs/beardedMen.svg';

class Model extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Model">
                <div className="Container">
                    <img className="model" src={image} alt="barbudo"/>
                    <Info isChecked={() => this.props.handleAddService("Barba","$150")} isUnchecked={() => this.props.handleRemoveService("Barba","$150")} title="Barba" desc="$150" serviceType="barba"/>
                    <Info isChecked={() => this.props.handleAddService("Pelo","$200")} isUnchecked={() => this.props.handleRemoveService("Pelo","$200")}  title="Pelo" desc="$200" serviceType="cortePelo"/>
                    <Info isChecked={() => this.props.handleAddService("Cejas","$70")} isUnchecked={() => this.props.handleRemoveService("Cejas","$70")}  title="Cejas" desc="$70" serviceType="cejas"/>
                </div>
            </div>
         );
    }
}
 
export default Model;