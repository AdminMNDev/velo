import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import MarkerVelo from './Marker'
import './Map.css';

class MapVelo extends Component{
  state = {
    lat: 45.763611683929796,
    lng: 4.874637805443967,
    zoom: 13,
  }
  render(){
    const position = [this.state.lat, this.state.lng, this.state.zoom]
    return(
      <div>
      <Map className="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerVelo position={position} formulaire={this.props.formulaire}/>
      </Map>
      </div>
    )
  }
}
export default MapVelo

