import React, { Component } from 'react';
import Product from './Product';
import ProductInfo from './ProductInfo';

import mascara from './imgs/mascarilla.jpg';
import maquina from './imgs/maquina.jpg';
import gel from './imgs/gel.jpg';
import wax from './imgs/wax.jpg';
import aceite from './imgs/aceite.jpg';
import plus from './imgs/plus-symbol.png';

class Catalog extends Component {
    state = {  
        products : [{title:'MASCARA FACIAL', desc:'ayuda en el cuidado de la belleza y salud facial', price:'$120 c/u', img:mascara},
                    {title:'MAQUINA WHAL', desc:'maquina para cortar pelo o barba marca wahl', price:'$8000', img:maquina},
                    {title:'GEL', desc:'hidrata el cabello, dejandolo brillante y firme durante todo el dia', price:'$300', img:gel},
                    {title:'CERA CAPILAR', desc:'le da forma a tu cabello sin endurecerlo', price:'$400', img:wax},
                    {title:'POMADA MODELADORA', desc:'hidrata, nutre y fija tu barba o bigotes solo con tus dedos', price:'$200', img:aceite},
                    {title:'SOLICITAR PRODUCTO', desc:'una vez procesado intentaremos conseguir el producto y nos comunicaremos contigo', price:'-', img:plus}
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
                    <p style={{width:"40%", marginLeft:"30%"}}>las fotos de los productos son meramente ilustrativas, las marcas de estos pueden variar segun el stock</p>
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