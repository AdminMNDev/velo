import React, { Component } from 'react'
import { Popup } from 'react-leaflet'
import "./popup.css"

class PopupVelo extends Component{
    constructor(props){
        super(props)
        this.state = {
            stationNom: '',
            stationAdresse: '',
        }
    }

    getDataStation = (nom, adress) => {
        //Aucun reservation doit etre en cours
        if(this.props.isReserved === false){
        this.setState({
            stationNom: nom,
            stationAdresse: adress,
        })
        //pour gerer le system asycrone
        setTimeout(() => {
            this.props.formulaire(this.state.stationNom, this.state.stationAdresse)
        }, 50);
    }else{
        alert('Une réservation est déjà en cours. Merci de l\'annuler')
    }
}
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
                            <div className="text_avl_bikes">
                                <p className="first_text_popup">{station.available_bikes}</p><p className="second_text_popup">{station.bike_stands}</p>
                            </div>
                            <p className="last_text_popup">Vélos libres</p>
                        </div>
                        <div className="avl_bikes">
                            <img src="parking-sign.png" alt="velo"></img>
                            <div className="text_avl_bikes">
                                <p className="first_text_popup">{station.available_bike_stands}</p><p className="second_text_popup">{station.bike_stands}</p>
                            </div>
                            <p className="last_text_popup">Places libres</p>
                        </div>
                        <button onClick={() => this.getDataStation(station.name, station.address)} className="button">Reserver !</button>
                    </div>
            </div>
        </Popup>
    )
  }
}
export default PopupVelo

