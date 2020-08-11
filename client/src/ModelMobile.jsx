import React, { Component } from 'react';
import InfoMobile from './InfoMobile'

class ModelMobile extends Component {
    state = {  }
    render() { 
        return (  
            <div className="ModelMobile">
                <InfoMobile type="Pelo" price="$250"/>
                <InfoMobile type="Barba" price="$100"/>
                <InfoMobile type="Cejas" price="$70"/>
            </div>
        );
    }
}
 
export default ModelMobile;