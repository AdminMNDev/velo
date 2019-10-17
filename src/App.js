import React, { Component } from 'react'
import MapVelo from './Map'
import { Animated } from 'react-animated-css';
import ReservationVelo from './Reservation';
import FooterVelo from './Footer';
import "./reset.css";
import MenuVelo from './Menu';
import BanniereVelo from './Baniere';
import SliderVelo from './Slider';
import JumbotronVelo from './Jumbotron';
import Compteur from './Compteur';



class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      formIsVisible: false,
      formBlockIsVisible: false,
      mapIsVisible: true,
      compteurIsVisible: false,
      compteurBlockIsVisible: false,
      stationNom: '',
      stationAdresse: '',
      formOut: 0,
      isReserved: false //Pour eviter les doublons de reservations
    }
  }

  formIsVisible = (nom, adresse) => {
    this.setState({
      formOut: 0,
      formBlockIsVisible: true,
      stationNom: nom,
      stationAdresse: adresse
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

  compteurIsVisible = (e) => {
    this.setState({
      formOut: 500,
      formIsVisible: false,
      isReserved: true
    })
    setTimeout(() =>{
      this.setState({
        formBlockIsVisible:false,
        compteurBlockIsVisible: true,
        compteurIsVisible: true
      })
    }, 450)
  }

  compteurIsNotVisible = () => {
    this.setState({
      compteurIsVisible: false,
      isReserved: false
    })

    setTimeout(() => {
      this.setState({
        compteurBlockIsVisible: false
      })
    }, 850)
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
        {/* Jumbotron */}
        <JumbotronVelo />
      {/* Map */}  
          <MapVelo formulaire={this.formIsVisible} isReserved={this.state.isReserved}/>
      {/* Form */}
      {this.state.formBlockIsVisible ?
        <Animated className="animation-form" animationIn="fadeIn" animationOut="fadeOut" animationOutDuration={this.state.formOut} isVisible={this.state.formIsVisible}>
          <ReservationVelo  compteur={this.compteurIsVisible}/>
        </Animated>
      : ""}
      {/* Compteur */}
      {this.state.compteurBlockIsVisible ?
        <Animated animationIn="bounceInRight" animationInDuration={450} isVisible={this.state.compteurIsVisible}>
          <Compteur stationNom={this.state.stationNom} stationAdresse={this.state.stationAdresse} newReservation={this.compteurIsNotVisible}/>
        </Animated>
      :  ""}
      {/* Footer */}
      <FooterVelo />
      </div>
    )
  }
}
export default App