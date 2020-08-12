import React, { Component } from 'react';
 
export class MapContainer extends Component {
  render() {
    return (
        <div className="Map">
            <iframe title="map" width="600" height="450" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBF2TutxcujUABLpGmpabfxIIX9o8G8Otg&q=Andy's+Food/" allowfullscreen> </iframe>
        </div>
    );
  }
}
 
export default MapContainer;