import React, { Component } from 'react'
import {Animated} from "react-animated-css"

class ReservationVelo extends Component{
    constructor(props){
        super(props)
    this.state = {
        isVisible: false
    }
}


  render(){
    return(
        <div>
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <button onClick={this.reservationClick} className="button">Reserver !</button>
        </Animated>
        {this.state.isVisible ?
        <div>
            <h1>Hi</h1>
        </div> : ''}
        </div>
    )
  }
}
export default ReservationVelo