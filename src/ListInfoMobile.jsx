import React, { Component } from 'react';
import InfoMobile from './InfoMobile'

class ListInfoMobile extends Component {
    state = {  }
    render() { 
        return (  
            <div className="ListInfoMobile">
                <div className="ListMobile">
                    <h2>{this.props.serviceType}</h2>
                    {this.props.listService.map(service => (
                        <InfoMobile handleCheckService={() => this.checkService(service.title, service.desc)} handleUncheckService={() => this.uncheckService(service.title, service.desc)} title={service.title} desc={service.desc}/>
                    ))}
                </div>
            </div>
        );
    }

    checkService = (title, desc) =>{
        this.props.isChecked(title, desc);
   }
   
   uncheckService = (title, desc) =>{
       this.props.isUnchecked(title, desc);
   }
}
 
export default ListInfoMobile;