import React, { Component } from 'react';
import CrearReserva from './CrearReserva';
import Model from './Model';
import ModelMobile from './ModelMobile';
import axios from 'axios';

class Servicios extends Component {
    state = { 
        serviceType : []
     }

     
    render() { 
        return ( 
            <div className="Servicios">
                <div>
                    <div style={{height:"100%",width:"100%",position:"absolute"}}>    
                        <CrearReserva handleCreateReservation={this.createReservation}/>
                        <Model handleAddService={this.addService} handleRemoveService={this.removeService}/>
                        
                        <ModelMobile/>  
                    </div>
                </div>
            </div>
         );
    }

    addService = (title, price) =>{
        this.setState({
            serviceType: [...this.state.serviceType, {title, price}]
        })
    }

    removeService = (title) =>{
        this.setState({serviceType: this.state.serviceType.filter(function(service) { 
            return service.title !== title
        })});
    }

    createReservation = (name, phone, date, hour, min) => {
        let time = hour + " " + min;

        const info = { name: name, phone: phone, day: date, time: time, service: this.state.serviceType }
                
        if(this.state.serviceType.length > 0){
            this.sendMessage(info);
        }
    }

    sendMessage = (info) =>{   
        const url = 'http://localhost:9000';

        axios.post(url + '/sendEmail ', info)
        .then((response)=>{
            if (response.data.msg === 'success'){
                alert("Email sent, awesome!"); 
            }else if(response.data.msg === 'fail'){
                alert("Oops, something went wrong. Try again")
            }
        })
    }
}
 
export default Servicios;