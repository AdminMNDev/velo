import React, { Component } from 'react'
import './Compteur.css'

class Compteur extends Component{
    render(){
        const { stationNom, stationAdresse } = this.props
        return(
        <div className="container-compteur">
            <p className="titre-compteur">Votre Réservation</p>
            <p className="border-titre-compteur"></p>
            <p className="text-compteur">Vélo réservé à la station {stationNom}</p>
            <p className="text-compteur">{stationAdresse}</p>
            <p className="text-compteur">temps restant 15 min et 10s</p>
            <button>Annuler la réservation</button>
        </div>
        )
    }
}

export default Compteur