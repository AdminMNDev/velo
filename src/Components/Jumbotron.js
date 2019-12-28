import React, { Component } from 'react'
import '../css/jumbotron.css'

class JumbotronVelo extends Component {
    constructor(props){
        super(props)
        this.city = ""
    }   
    selectOption = () => {
        // // Permet de récuperer la value de l'input de la ville
        const list = this.refs.list
        let opt
        for ( let i = 0, len = list.options.length; i < len; i++ ) {
            opt = list.options[i];
            if ( opt.selected === true ) {
               this.city = opt.value
                break;
            }
        }

        this.props.selectedCity(this.city)
    }
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
	                <select id="list" ref="list" onChange={this.selectOption}>
		                <option value="null">Sélectionner une ville</option>
		                <option value="amiens">Amiens</option>
		                <option value="cergy-pontoise">Cergy-pontoise</option>
                        <option value="creteil">Creteil</option>
		                <option value="lyon">Lyon</option>
                        <option value="marseille">Marseille</option>
		                <option value="mulhouse">Mulhouse</option>
                        <option value="nancy">Nancy</option>
		                <option value="nantes">Nantes</option>
                        <option value="rouen">Rouen</option>
		                <option value="toulouse">Toulouse</option>
	                </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default JumbotronVelo