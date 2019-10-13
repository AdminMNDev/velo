import React, { Component } from 'react'
import MapVelo from './Map'
import { Animated } from 'react-animated-css';
import ReservationVelo from './Reservation';
import FooterVelo from './Footer';
import "./reset.css";
import MenuVelo from './Menu';



class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      formIsVisible: false,
      formBlockIsVisible: false,
      mapIsVisible: true
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
      {/* Menu */}
        <Animated className="animation-map" animationIn="bounceInLeft" animationInDuration={2000} isVisible={true}>
          <MenuVelo />
        </Animated>
      {/* Map */}
        <Animated className="animation-map" animationIn="bounceInLeft" animationInDuration={2500} animationOutDuration={0} isVisible={this.state.mapIsVisible}>
          <MapVelo formulaire={this.isVisible}/>
        </Animated>
      {/* Form */}
      {this.state.formBlockIsVisible ?
        <Animated className="animation-form" animationIn="fadeIn" animationOut="fadeOut" animationOutDuration={0} isVisible={this.state.formIsVisible}>
          <ReservationVelo />
        </Animated>
      : ""}
      {/* Footer */}
      <FooterVelo />
      </div>
    )
  }
}
export default App