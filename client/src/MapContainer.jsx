import React, { Component } from 'react';

export class MapContainer extends Component {
  render() {
    
    return (
        <div className="Map">
            <iframe title="map" width="100%" height="450" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBF2TutxcujUABLpGmpabfxIIX9o8G8Otg&q=/Félix+de+Lizarza+720,+20300+Pan+de+Azúcar,+Departamento+de+Maldonado/" > </iframe>
        </div>
    );
  }
}
 
export default MapContainer;