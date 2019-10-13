import React, { Component } from 'react'
import './Reservation.css'
import CanvasReservation from './Canvas';

class ReservationVelo extends Component{
    constructor(props){
        super(props)
    this.state = {
    }
}

  render(){
    return(
        <div className="container-form">
            <form action ="#" method="post">
                <div className="input-form">
                    <input id="name" type="text" name="name" placeholder="Nom"></input>
                    <input id="nickname" type="text" name="nickname" placeholder="Prénom"></input>
                </div>
                <CanvasReservation />
                <p>Veuillez apposer votre signature et indiquer votre nom et prénom afin de finaliser votre réservation</p>
                <input type="submit" value="Reserver" className="input-reservation"></input>
            </form>
        </div>
    )
  }
}
export default ReservationVelo