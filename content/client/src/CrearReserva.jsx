import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Reservar from './Book';
// import ModelMobile from './ModelMobile';
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
                            {/* <input type="text" placeholder="hora" onChange={e => this.updateHour(e)}/> */}
                            <select onChange={e => this.updateHour(e)}>
                                <option>10</option>
                                <option>11</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                            </select> 
                            <span> : </span>
                            <select onChange={e => this.updateMin(e)}>
                                <option>00</option>
                                <option>30</option>
                            </select> <br/>
                        </div>

                        <input type="text" placeholder="Ingresa tu nombre" value={this.state.name} onChange={e => this.updateName(e)}/><br/>
                        <input type="text" placeholder="Ingresa tu celular" value={this.state.phone} onChange={e => this.updatePhone(e)}/>
                        {/* <ModelMobile handleAddService={this.props.handleAddService} handleRemoveService={this.props.handleRemoveService}/>   */}
                        <Reservar handleReservation={() => this.handleCreateReservation(this.state.name, this.state.phone, this.state.date, this.state.hour, this.state.min)}/>
                    </div>          
                </div>
            </div>
        );
    }
}

export default CrearReserva;