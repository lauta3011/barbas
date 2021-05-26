import React, { Component } from 'react';
import CrearReserva from './CrearReserva';
import Model from './Model';
import axios from 'axios'

class Servicios extends Component {
    state = { 
        showModal : 'none',
        name : '',
        phone : '',
        date : '',
        time : '',
        serviceType : []
     }

     
    render() { 
        return ( 
            <div className="Servicios">
                <CrearReserva handleAddService={this.addService} handleRemoveService={this.removeService} handleCreateReservation={this.createReservation}/>
                <Model handleAddService={this.addService} handleRemoveService={this.removeService}/>                    
            </div>
        );
    }

    addService = (title, price) =>{
        this.setState({
            serviceType: [...this.state.serviceType, {title, price}]
        })
        console.log(title, price);
    }
    
    removeService = (title) =>{
        this.setState({serviceType: this.state.serviceType.filter(function(service) { 
            return service.title !== title
        })});
        console.log(title);
    }

    createReservation = (name, phone, date, hour, min) => {
        let time = hour + " " + min;
        let num = 59891453715;
        
        
        if(this.state.serviceType.length > 0){
            let texto = 'Hola! quiero agendarme para el ' + date + ' a la hora ' + time + '. Queria hacerme ';
            this.state.serviceType.map((s) => {
                texto += s.title + ' '
            })
            texto += '. Soy ' + name + ' y mi telefono es ' + phone;

            console.log(texto);
            window.location.href = 'https://wa.me/'+ num + '/?text='+ texto;    
        }
    }

    //esto quedo deprecado pq ya no quiere usar mail, si no mandar un mensaje por wpp
    // sendMessage = () =>{   
        // const info = { type : 'Reservacion', name: this.state.name, phone: this.state.phone, day: this.state.date, time: this.state.time, service: this.state.serviceType }        
        // const url = 'https://barbas-barbershop.herokuapp.com';

        // axios.post(url + '/sendEmail ', info)
        // .then((response)=>{
        //     if (response.data.msg === 'success'){
        //         console.log('Email sent, awesome');
        //     }else if(response.data.msg === 'fail'){
        //         console.log("Oops, something went wrong. Try again");
        //     }
        // })

    // }
}
 
export default Servicios;