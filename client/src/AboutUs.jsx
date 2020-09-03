import React, { Component } from 'react';
import MapContainer from './MapContainer'

class AboutUs extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="AboutUs">
                <div className="Container">
                    <div className="title">
                        <h2>DONDE PODES ENCONTRARNOS</h2>
                        <p>estamos localizados en el centro de Pan de Azucar, en Felix de Lizarza e Ituzaingo</p>
                        <MapContainer /><br />
                        <h3>TAMBIEN PODES LLAMAR AL 095491017</h3>         
                    </div>
                </div>
            </div>
         );
    }
}
 
export default AboutUs;