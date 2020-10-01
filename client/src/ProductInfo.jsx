import React, { Component } from 'react';
import axios from 'axios';

class ProductInfo extends Component {
    state = {
        name : '',
        phone : '',
        extraComment : '',  
        confirmedInfo : false
    }
    render() { 
        return (  
        <div style={{display:this.props.handleShowModal/*, backgroundImage:'url('+ this.props.image +')'*/}} className="ProductInfo">
                <img src={this.props.image} alt={this.props.title}/>
                <div className="Container">
                    <div className="Info">
                        <div>
                            <h2>{this.props.title}</h2>
                            <p>{this.props.price}</p>
                        </div>
                        <p>{this.props.desc}</p> 
                    </div>

                    <div className="Transaction">
                        <div className="InfoContainer">
                            <div className="InsertedInfo">
                                <p>al ingresar tus datos guardaremos este producto para que puedas ir a retirarlo cuando gustes</p>
                                <span>* </span><input type="text" placeholder="Inserta tu nombre" onChange={(e) => this.updateName(e)}/><br />
                                <span>* </span><input type="tel" pattern="[0-9]*" placeholder="Inserta tu telefono" onChange={(e) => this.updatePhone(e)} /><br />
                                <textarea  placeholder="Agrega un comentario" onChange={(e) => this.updateComment(e)} /><br />
                            </div>

                            <div className="ConfirmInfo">
                                <h4>{this.state.name}, ¿confirmas esta reserva?</h4>
                                <p>Alguien se comunicara a este numero {this.state.phone} para confirmarte la disponibilidad de este producto.</p>
                                <p>Muchas gracias por elegirnos.</p>
                            </div>
                        </div>

                        <div className="Buttons">
                            <p className="Cancel" onClick={this.handleCancel}>CANCELAR</p>
                            <div className="Book" >
                                <button onClick={() => this.confirmReservation(this.state.name, this.state.phone)} value="RESERVAR">RESERVAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    updateName(e){
        this.setState({
            name : e.target.value
        })
    }

    updatePhone(e){
        if(e.target.validity.valid){
            this.setState({
                phone : e.target.value
            })
        }
    }

    updateComment(e){
        this.setState({
            extraComment : e.target.value
        })
    }

    handleCancel = () =>{
        if(this.state.confirmedInfo === true){
            document.querySelector(".InfoContainer").style.transform = "translateX(0%)";
            this.setState({ confirmedInfo : false});
        }else{
            this.props.handleHideModal();
        }
    }
    
    confirmReservation = (name, phone) => {        
        if(this.state.confirmedInfo === false && name !== '' && phone !== ''){
            document.querySelector(".InfoContainer").style.transform = "translateX(-50%)";
            this.setState({ confirmedInfo : true});
        }
        else if(this.state.confirmedInfo === true) {
            this.props.handleHideModal();
            this.setState({ confirmedInfo : false});
            document.querySelector(".InfoContainer").style.transform = "translateX(0%)";
            this.sendMessage();
        }
    }

    sendMessage = () =>{   
        const info = { type : 'Producto', name: this.state.name, phone: this.state.phone, extraComment: this.state.extraComment, productName : this.props.title, price : this.props.desc };        
        const url = 'http://localhost:9000';
        
        axios.post(url + '/sendEmail ', info)
        .then((response)=>{
            if (response.data.msg === 'success'){
                console.log("Email sent, awesome!"); 
            }else if(response.data.msg === 'fail'){
                console.log("Oops, something went wrong. Try again")
            }
        })
    }
}
 
export default ProductInfo;