import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import MarkerVelo from './Marker'
import '../css/map.css';

class MapVelo extends Component{
  constructor(props){
    super(props)
    this.state = {
      position: {
        lat: this.props.position.lat,
        lng: this.props.position.lng
      },
      zoom: 13,
      markerIsVisible: false
  }
  this.loadStation()
}


loadStation = () =>{ //Permet de charger les stations après l'animation de la map. evite le ralentissement du nav
  setTimeout(() => {
    this.setState({
      markerIsVisible: true
    })
  }, 2000);
}

  //permet de changer le centrage de la ville.
  updateMap = (lat, lng, city) =>{
    this.setState({
      position:{
        lat: lat,
        lng: lng
      }
    })
    const marker = this.refs.marker
    marker.updateMarker(city)
  }

  render(){
    const position = [this.state.position.lat, this.state.position.lng]
    return(
      <div>
      <Map className="map" center={position} zoom={this.state.zoom} id="map">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.state.markerIsVisible ?
        <MarkerVelo position={position} formulaire={this.props.formulaire} isReserved={this.props.isReserved} ref='marker'/>
        : ''}
      </Map>
      </div>
    )
  }
}
export default MapVelo

