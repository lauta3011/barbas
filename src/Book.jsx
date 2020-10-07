import React, { Component } from 'react';

class Book extends Component {
    state = {  }
    render() { 
        return (  
            <div className="Book">
                <button onClick={this.props.handleReservation} value="RESERVAR">RESERVAR</button>
            </div>
        );
    } 

}
 
export default Book;