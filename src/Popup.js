import React, { Component } from 'react'
import { Popup } from 'react-leaflet'

class PopupVelo extends Component{

  render(){
      const { station } = this.props
    return(
        <Popup>
            <div>
                <h3>{station.name}</h3>
                <p>{station.address}</p>
                    <div>
                        <p>Il y a {station.available_bikes} vélo disponible sur {station.bike_stands} -
                        Il y a {station.available_bike_stands} place disponible sur {station.bike_stands}</p>
                    </div>
            </div>
        </Popup>
    )
  }
}
export default PopupVelo

