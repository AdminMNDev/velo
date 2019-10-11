import React, { Component } from 'react'
import { Popup } from 'react-leaflet'
import "./popup.css"

class PopupVelo extends Component{

  render(){
      const { station } = this.props
    return(
        <Popup>
            <div>
                <h3>{station.name}</h3>
                <p>{station.address}</p>
                    <div>
                        <div className="avl_bikes">
                            <img src="bicycle.png" alt="velo"></img>
                            <p className="text_avl_bikes">
                                <p className="first_text_popup">{station.available_bikes}</p><p className="second_text_popup">{station.bike_stands}</p>
                            </p>
                            <p className="last_text_popup">Vélos libres</p>
                        </div>
                        <div className="avl_bikes">
                            <img src="parking-sign.png" alt="velo"></img>
                            <p className="text_avl_bikes">
                                <p className="first_text_popup">{station.available_bike_stands}</p><p className="second_text_popup">{station.bike_stands}</p>
                            </p>
                            <p className="last_text_popup">Places libres</p>
                        </div>
                        <button>Reserver !</button>
                    </div>
            </div>
        </Popup>
    )
  }
}
export default PopupVelo

