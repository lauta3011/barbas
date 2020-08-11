import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
// import {Map} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
        <div className="Map">
            <Map google={window.google} zoom={14} />
        </div>
    );
  }
}
 
export default GoogleApiWrapper(
    (props) => ({
      apiKey: props.apiKey,
      language: props.language,
    }
  ))(MapContainer)
// export default MapContainer;