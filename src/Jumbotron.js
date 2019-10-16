import React, { Component } from 'react'
import './Jumbotron.css'

class JumbotronVelo extends Component {

    render(){
        return(
            <div>
                <div className="container-jumbotron">
                    <div className="jumbotron-text">
                    <p className="titre-jumbotron">RÉSERVEZ VOTRE VÉLO'V</p>
                    <p className="border-titre-jumbotron"></p>
                    <p className="text-jumbotron">Vous pouvez réserver un vélo, 7j/7, 24h/24.<br></br>
                    Dans chaque station, une borne permet d'acquérir une carte (courte durée) 
                    payable par carte bancaire. Le ticket 1 trajet coûte 1,80 € et la formule 24 heures 4 €.
                    L'abonnement longue durée coûte 31 €.</p>
                    <p className="point-animation"><a href="#map">.</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default JumbotronVelo