import React, { Component } from 'react';

class Product extends Component {
    state = {  }
    render() { 
        return (  
            <div onClick={() => this.props.handleOnClick(this.props.title, this.props.desc, this.props.price, this.props.img )} className="Product">
                <img src={this.props.img} alt={this.props.title}/>
                <h4>{this.props.title}</h4>
            </div>
        );
    }
}
 
export default Product;