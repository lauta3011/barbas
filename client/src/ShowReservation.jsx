import React, { Component } from 'react';

class ShowReservation extends Component {
    state = {  }
    render() { 
        return (  
            <div style={{"display":this.props.handleShowModal}} className="ShowReservation">
                <div className="Container">
                    <h1>Reserva confirmada</h1><br/>                    
                    <p>{this.props.name}, reservaste turno para el dia {this.props.date} a la hora {this.props.time}.</p>

                    <div style={{display:"flex", marginTop:"80px"}}>
                        <p className="Cancel" onClick={this.props.handleHideModal}>CANCELAR</p>
                        <div className="Book" >
                            <button onClick={() => {this.props.handleHideModal();this.props.handleSendMessage()}} value="LISTO">LISTO</button>
                        </div>
                    </div>

                </div>
                <div className="ModalBackground"></div>
            </div>
        );
    }
}
 
export default ShowReservation;