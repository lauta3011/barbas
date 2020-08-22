import React, { Component } from 'react';
import InfoMobile from './InfoMobile'

class ModelMobile extends Component {
    state = {  }
    render() { 
        return (  
            <div className="ModelMobile">
                <InfoMobile isChecked={() => this.props.handleAddService("Barba","$150")} isUnchecked={() => this.props.handleRemoveService("Barba","$150")} title="Barba" desc="$150" serviceType="barba"/>
                <InfoMobile  isChecked={() => this.props.handleAddService("Pelo","$200")} isUnchecked={() => this.props.handleRemoveService("Pelo","$200")}  title="Pelo" desc="$200" serviceType="cortePelo"/>
                <InfoMobile  isChecked={() => this.props.handleAddService("Cejas","$70")} isUnchecked={() => this.props.handleRemoveService("Cejas","$70")}  title="Cejas" desc="$70" serviceType="cejas"/>
            </div>
        );
    }
}
 
export default ModelMobile;