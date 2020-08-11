import React, { Component } from 'react';

class Reservar extends Component {
    state = {  }
    render() { 
        return (  
            <div className="Reservar">
                <button onClick={this.props.handleReservation} value="RESERVAR">RESERVAR</button>
            </div>
        );
    } 

}
 
export default Reservar;