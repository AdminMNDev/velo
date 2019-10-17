import React, { Component } from 'react'
import './Reservation.css'
import CanvasReservation from './Canvas';

class ReservationVelo extends Component{
    constructor(props){
        super(props)
    this.state = {
        nom: '',
        prenom: '',
        isNotEmpty: false
    }
}

handleChangeName = (e) =>{
const nom= e.currentTarget.value
this.setState({
    nom: nom
})
}

handleChangeNickname = (e) =>{
    const prenom = e.currentTarget.value
    this.setState({
        prenom: prenom
    })
}
isSumbit = (e) => {
    e.preventDefault()
    let nom = this.state.nom.trim()
    let prenom = this.state.prenom.trim()

    if(nom !== '' && prenom !== ''){
        //affiche le compteur
        this.props.compteur()
    }else{
       return(
           alert('Aucun des champs ne doit être vide !')
       )
    }
    //remet le formulaire vide
    this.setState({
        nom: '',
        prenom: ''
    })
}

isNotEmpty = () => {
    this.setState({
        isNotEmpty: true
    })
}

  render(){
    return(
        <div className="container-form">
            <form action ="#" method="post" onSubmit={this.isSumbit}>
                <div className="input-form">
                    <input id="name" type="text" name="name" placeholder="Nom" value={this.state.nom} required onChange={this.handleChangeName}></input>
                    <input id="nickname" type="text" name="nickname" placeholder="Prénom" value={this.state.prenom} required onChange={this.handleChangeNickname}></input>
                </div>
                <CanvasReservation isNotEmpty={this.isNotEmpty}/>
                <p>Veuillez apposer votre signature et indiquer votre nom et prénom afin de finaliser votre réservation</p>
                {this.state.isNotEmpty ? <input type="submit" value="Reserver" className="input-reservation"></input> : ''}
            </form>
        </div>
    )
  }
}
export default ReservationVelo