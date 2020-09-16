import React, { Component } from 'react';
import ListInfo from './ListInfo';
import image from './imgs/beardedMen.svg';

class Model extends Component {
    state = {
        hair : [{title:'Corte Clasico',desc:'$200'}, {title:'Degrades',desc:'$250'}, {title:'Hair Tatto',desc:'$300'}],
        beard : [{title:'Barba comun',desc:'$50'}, {title:'Barba premium',desc:'$100'}],
        eyeBrow : [{title:'Cejas',desc:'$50'}]
    }
    render() { 
        return ( 
            <div className="Model">
                <div className="Container">
                    <img className="model" src={image} alt="barbudo"/>
                    <ListInfo isChecked={(title, desc) => this.props.handleAddService(title, desc)} isUnchecked={(title, desc) => this.props.handleRemoveService(title, desc)} listService={this.state.beard} serviceType="Barba"/>
                    <ListInfo isChecked={(title, desc) => this.props.handleAddService(title, desc)} isUnchecked={(title, desc) => this.props.handleRemoveService(title, desc)}  listService={this.state.hair} serviceType="Pelo"/>
                    <ListInfo isChecked={(title, desc) => this.props.handleAddService(title, desc)} isUnchecked={(title, desc) => this.props.handleRemoveService(title, desc)}  listService={this.state.eyeBrow}  serviceType="Cejas"/>
                </div>
            </div>
         );
    }
}
 
export default Model;