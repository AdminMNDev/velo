import React, { Component } from 'react'
import MapVelo from './Map'
import { Animated } from 'react-animated-css';
import ReservationVelo from './Reservation';



class App extends Component{
  state = {
    mapIsVisible: true,
    mapIsDisplay: true,
    formIsVisible: false
  }

  isVisible = () => {
    this.setState({
      mapIsVisible: false,
      formIsVisible: true
    })

    //Permet de display le bloc de la map pour ne pas crée un vide.
    setTimeout(
      () => {
          this.setState({mapIsDisplay: false})
          console.log(this.state.mapIsDisplay)
      },
      400)
  }
  render(){
    return(
      <div>
      {/* Permet de cacher le bloc de la map une fois l'animation finit */}
      {this.state.mapIsDisplay ? 
        <Animated animationIn="bounceInLeft" animationOut="zoomOutUp" animationOutDuration={400} isVisible={this.state.mapIsVisible}>
          <MapVelo formulaire={this.isVisible} />
        </Animated>
          : 
        ' '
      }
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={this.state.formIsVisible}>
        <ReservationVelo />
      </Animated>
      </div>
    )
  }
}
export default App