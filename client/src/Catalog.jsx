import React, { Component } from 'react';
import Product from './Product';
import ProductInfo from './ProductInfo';
import image from './imgs/header-img.JPEG';

class Catalog extends Component {
    state = {  
        products : [{title:'MASCARA CARBONICA', desc:'ni idea es una mascara negra supuestamente hecha de carbon', price:'$200', img:image},
                    {title:'MASCARA CARBONICA 2', desc:'ni idea es una mascara negra supuestamente hecha de carbon', price:'$200', img:image},
                    {title:'MASCARA CARBONICA 3', desc:'ni idea es una mascara negra supuestamente hecha de carbon', price:'$200', img:image},
                    {title:'MASCARA CARBONICA 4', desc:'ni idea es una mascara negra supuestamente hecha de carbon', price:'$200', img:image},
                    {title:'MASCARA CARBONICA 5', desc:'ni idea es una mascara negra supuestamente hecha de carbon', price:'$200', img:image},
                    {title:'MASCARA CARBONICA 6', desc:'ni idea es una mascara negra supuestamente hecha de carbon', price:'$200', img:image}
                ],
        showModal : 'none',
        prodTitle : '',
        prodDesc : '',
        prodPrice : '',
        prodImg : '',

    }
    render() { 
        return (  
            <div className="Catalog">
                <div className="Container">
                    <h2>PRODUCTOS</h2>
                    <div className="ProductList">
                        {this.state.products.map(product => (
                            <Product handleOnClick={this.openInfo} title={product.title} desc={product.desc} price={product.price} img={product.img}/>
                        ))}
                    </div>
                </div>
                <ProductInfo handleHideModal={this.hideModal} handleShowModal={this.state.showModal} title={this.state.prodTitle} desc={this.state.prodDesc} price={this.state.prodPrice} image={this.state.prodImg}/>
            </div>
        );
    }

    openInfo = (title, desc, price, img) =>{
        this.setState({ showModal : 'initial'})
        this.setState({ prodTitle : title })
        this.setState({ prodImg : img })
        this.setState({ prodDesc : desc })
        this.setState({ prodPrice : price })
    }

    hideModal = () =>{
        this.setState({ showModal : 'none'})
    }
}
 
export default Catalog;