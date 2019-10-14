import React, { Component } from 'react'
import MapVelo from './Map'
import { Animated } from 'react-animated-css';
import ReservationVelo from './Reservation';
import FooterVelo from './Footer';
import "./reset.css";
import MenuVelo from './Menu';
import BanniereVelo from './Baniere';
import SliderVelo from './Slider';



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
      window.scrollTo(0, window.innerHeight * 3)
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
      {/* Baniere */}
        <Animated animationIn="bounceInRight" animationInDuration={2000} isVisible={true}>
          <BanniereVelo />
        </Animated>
      {/* Slider */}
        <Animated className="animation-map" animationIn="bounceInLeft" animationInDuration={2000} isVisible={true}>
          <SliderVelo />
        </Animated>
      {/* Map */}  
          <MapVelo formulaire={this.isVisible}/>
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