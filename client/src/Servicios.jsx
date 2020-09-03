import React, { Component } from 'react';
import CrearReserva from './CrearReserva';
import Model from './Model';
import ShowReservation from './ShowReservation';
import axios from 'axios';

class Servicios extends Component {
    state = { 
        showModal : 'none',
        name : '',
        date : '',
        time : '',
        serviceType : []
     }

     
    render() { 
        return ( 
            <div className="Servicios" style={{height:"100%",width:"100%",position:"absolute"}}>
                <ShowReservation handleHideModal={this.hideModal} handleShowModal={this.state.showModal} name={this.state.name} date={this.state.date} time={this.state.time}/>
                <CrearReserva handleAddService={this.addService} handleRemoveService={this.removeService} handleCreateReservation={this.createReservation}/>
                <Model handleAddService={this.addService} handleRemoveService={this.removeService}/>                    
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

    hideModal = () => {
        this.setState({ showModal : "none"})
    }

    createReservation = (name, phone, date, hour, min) => {
        let time = hour + " " + min;
        this.setState({ name : name});
        this.setState({ date : date});
        this.setState({ time : time});
        
        const info = { name: name, phone: phone, day: date, time: time, service: this.state.serviceType }
        
        if(this.state.serviceType.length > 0){
            this.setState({ showModal : "initial"});
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