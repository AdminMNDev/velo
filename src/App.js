import React, { Component } from 'react'
import MapVelo from './Map'
import { Animated } from 'react-animated-css';
import ReservationVelo from './Reservation';



class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      formIsVisible: false,
      formBlockIsVisible: false
    }   
  }

  isVisible = () => {
    this.setState({
      formBlockIsVisible: true
    })
    //Permet de gerer le soucis de bloc vide avec un decallage entre les fonctions.
    setTimeout(() => {
      window.scrollTo(0, window.innerHeight)
    }, 50);
    setTimeout(() => {
      this.setState({
        formIsVisible: true
      })
    }, 350);
  }

  render(){
    return(
      <div>
        <Animated className="animation-map" animationIn="bounceInLeft" isVisible={this.state.mapIsVisible}>
          <MapVelo formulaire={this.isVisible}/>
        </Animated>
      {this.state.formBlockIsVisible ?
        <Animated className="animation-form" animationIn="fadeIn" animationOut="fadeOut" animationOutDuration={0} isVisible={this.state.formIsVisible}>
          <ReservationVelo />
        </Animated>
      : ""}
      </div>
    )
  }
}
export default App