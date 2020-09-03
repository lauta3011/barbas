import React, { Component } from 'react';

class ShowReservation extends Component {
    state = {  }
    render() { 
        return (  
            <div style={{"display":this.props.handleShowModal}} className="ShowReservation">
                <div className="Container">
                    <h1>Reserva confirmada</h1><br/>                    
                    <p>{this.props.name}, reservaste turno para el dia {this.props.date} a la hora {this.props.time}.</p>
                    <div className="Reservar" >
                        <button onClick={this.props.handleHideModal} value="LISTO">LISTO</button>
                    </div>
                </div>
                <div className="ModalBackground"></div>
            </div>
        );
    }
}
 
export default ShowReservation;