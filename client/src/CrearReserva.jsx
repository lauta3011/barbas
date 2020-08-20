import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Reservar from './Reservar';
import ModelMobile from './ModelMobile';
import 'react-calendar/dist/Calendar.css';
import './BaseStyle.css';

class CrearReserva extends Component {
    state = { 
        name:"",
        phone:"",
        date: "",
        hour:"",
        min:""
     }

     handleCreateReservation = (name, phone, date, hour, min) => {
        if(name !== "" && phone !== "" && date !== null && hour !== null && min !== null){
            this.props.handleCreateReservation(name, phone, date, hour, min);
        }
    }

    updateDay = date => {
        let d = date.getDate() + " / " + (date.getMonth() + 1) + " / " + date.getFullYear();
        
        this.setState({ 
            date: d
        })
    }
    
    updateName(e){
        this.setState({
            name : e.target.value
        })
    }

    updatePhone(e){
        if(!isNaN(e.target.value)){
            this.setState({
                phone : e.target.value
            })
        }
    }
    
    updateHour(e){
        if(e.target.value >= 10 && e.target.value <= 21){
            this.setState({
                hour : e.target.value
            })
        }
    }
    
    updateMin(e){
        this.setState({
            min : e.target.value
        })
    }

    render() { 
        return (  
            <div className="CrearReserva" >
                <div className="Container" >
                    <div className="title">
                        <h2>RESERVA TU TURNO</h2>
                        <p>elegi fecha, hora y haz click sobre la imagen para elegir tu servicio</p>
                    </div>

                    <Calendar onChange={this.updateDay} />

                    <div className="inputs">
                        <div className="timePicker">
                            <input type="number" min="10" max="21" placeholder="11" onChange={e => this.updateHour(e)}/>
                            <span style={{marginRight:"30px"}}> : </span>
                            <select onChange={e => this.updateMin(e)}>
                                <option>00</option>
                                <option>30</option>
                            </select> <br/>
                        </div>

                        <input type="text" placeholder="Ingresa tu nombre" value={this.state.name} onChange={e => this.updateName(e)}/><br/>
                        <input type="text" placeholder="Ingresa tu celular" value={this.state.phone} onChange={e => this.updatePhone(e)}/>
                        <ModelMobile handleAddService={this.props.handleAddService} handleRemoveService={this.props.handleRemoveService}/>  
                        <Reservar handleReservation={() => this.handleCreateReservation(this.state.name, this.state.phone, this.state.date, this.state.hour, this.state.min)}/>
                    </div>          
                </div>
            </div>
        );
    }
}

export default CrearReserva;