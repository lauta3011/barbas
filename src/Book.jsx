import React, { Component } from 'react';
import wpp from './imgs/WhatsApp-logo.png' ;

class Book extends Component {
    state = {  }
    render() { 
        return (  
            <div className="Book">
                <button onClick={this.props.handleReservation} value="RESERVAR"><img style={{width:'30%', marginLeft:'-50px'}} src={wpp} alt='wpp logo'/>RESERVAR</button>
            </div>
        );
    } 

}
 
export default Book;