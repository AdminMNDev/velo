import React, { Component } from 'react'
import '../css/compteur.css'

class Compteur extends Component{
    constructor(props){
        super(props)
        this.state = {
            m: 20,
            s: 0,
            countDown: true
        }
    }

    componentDidMount = () => {
        this.countDown()
    }

    countDown = () => {
        this.setState({
            countDown: true
        })
        setInterval( () => {
            if(this.state.countDown){
            if(this.state.m <= 0 && this.state.s<= 0){
                clearInterval()
                this.setState({
                    countDown: false
                })
            }else{
                if(this.state.s > 0){
                   this.setState({
                       s: this.state.s - 1
                   })
                }else{
                   this.setState({
                       m: this.state.m - 1,
                       s: 59
                   })
                }
            }
    }
}, 1000)
}
    //pour eviter les erreurs d'abonnement
    UnSubscribeCountDown = () => {
        this.setState({
            countDown: false
        })
        this.props.newReservation()
    }

    render(){
        const { stationNom, stationAdresse } = this.props
        return(
        <div className="container-compteur">
            <p className="titre-compteur">Votre Réservation</p>
            <p className="border-titre-compteur"></p>
            <p className="text-compteur">Vélo réservé à la station {stationNom}</p>
            <p className="text-compteur">{stationAdresse}</p>
            {/* Si compteur est en cours alors affichage du temps */}
            {this.state.countDown ?
            <div>
                <p className="text-compteur">temps restant {this.state.m} min et {this.state.s} s</p>
                <button onClick={this.UnSubscribeCountDown} className="button-reservation">Annuler la réservation</button>
            </div>
            : 
            <div>
                <p className="text-compteur">Réservation périmé</p>
                <button onClick={this.UnSubscribeCountDown} className="button-reservation">Nouvelle réservation</button>
            </div>}
        </div>
        )
    }
}

export default Compteur