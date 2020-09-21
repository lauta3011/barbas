import React, { Component } from 'react';
import Info from './Info';

class ListInfo extends Component {
    state = { 
        checked : false
     }
    render() { 
        return (
            <div className="ListInfo">
                <div onMouseOver={this.showList} onMouseOut={this.hideList} onClick={this.checkService} className={this.props.serviceType} style={this.props.stylesheet}>
                    <div>
                        <h2>{this.props.serviceType}</h2>
                        <div className="List">
                            {this.props.listService.map(service => (
                                <Info key={service.title} handleCheckService={this.checkService} handleUncheckService={this.uncheckService} title={service.title} desc={service.desc}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    hideList = () => {
        document.querySelector("."+this.props.serviceType + " .List").style.opacity = 0;        
        document.querySelector("."+this.props.serviceType + " h2").style.marginBottom = "0px";
    }

    showList = () =>{
        document.querySelector("."+this.props.serviceType + " .List").style.opacity = .9;
        document.querySelector("."+this.props.serviceType + " h2").style.marginBottom = "35px";
    }

    checkService = (title, desc) =>{
         this.props.isChecked(title, desc);
    }
    
    uncheckService = (title, desc) =>{
        this.props.isUnchecked(title, desc);
    }

}
 
export default ListInfo;