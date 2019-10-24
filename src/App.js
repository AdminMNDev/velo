import React, { Component } from 'react'
import MapVelo from './Components/Map'
import { Animated } from 'react-animated-css';
import ReservationVelo from './Components/Reservation';
import FooterVelo from './Components/Footer';
import "./css/reset.css";
import MenuVelo from './Components/Menu';
import BanniereVelo from './Components/Baniere';
import SliderVelo from './Components/Slider';
import JumbotronVelo from './Components/Jumbotron';
import Compteur from './Components/Compteur';



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
      isReserved: false, //Pour eviter les doublons de reservations
      position: {
        lat: 0,
        lng: 0
      }
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

  selectedCity = (city) => {
    const map = this.refs.map
    switch (city) {
      case "amiens":
        map.updateMap(49.8934018, 2.2987732, "amiens")
        break;
      case "cergy-pontoise":
        map.updateMap(49.0378845, 2.0802094, "cergy-pontoise")
        break;
        case "creteil":
        map.updateMap(48.7841943, 2.4521374, "creteil")
        break;
      case "lyon":
        map.updateMap(45.763611683929796, 4.874637805443967, "lyon")
        break;
      case "marseille":
        map.updateMap(43.275306, 5.3653827, "marseille")
        break;
      case "mulhouse":
        map.updateMap(47.7523344, 7.2998749, "mulhouse")
        break;
      case "nancy":
        map.updateMap(48.6880796, 6.1559274, "nancy")
        break;
      case "nantes":
        map.updateMap(47.2195494,-1.5609162, "nantes")
        break;
      case "rouen":
        map.updateMap(49.4388056,1.0810451, "rouen")
        break;
      case "toulouse":
        map.updateMap(43.6001813,1.3995368, "toulouse")
        break;
    
      default:
        break;
    }
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
        <JumbotronVelo selectedCity={this.selectedCity}/>
      {/* Map */}  
          <MapVelo formulaire={this.formIsVisible} isReserved={this.state.isReserved} position={this.state.position} ref="map"/>
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