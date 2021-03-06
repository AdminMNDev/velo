import React, { Component } from 'react'
import L from 'leaflet'
import { Marker } from 'react-leaflet'
import PopupVelo from './Popup';

const openIcon = L.icon({
    iconUrl: "bikeavlb.png",
    iconSize: [25,25],
    iconAnchor: [22, 22],
    popupAnchor: [-10,-20],
  })
const closeIcon = L.icon({
    iconUrl: "bike.png",
    iconSize: [25,25],
    iconAnchor: [22, 22],
    popupAnchor: [-10,-20],
  })

class MarkerVelo extends Component{
    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            stations: [],
            city: 'lyon'
        }
    }

    componentDidMount(){
        let city = this.state.city
        fetch(`https://api.jcdecaux.com/vls/v1/stations?contract=${city}&apiKey=45e68957d549cc855a39a0557d92e8f2f91ffa5f`)
        .then(res => res.json())
        .then(
            (stations) => {
                this.setState({
                    isLoaded: true,
                    stations: stations
                })
            },
            //on récupère l'erreur de l'appelle
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }


    updateMarker(city){
        this.setState({
            city: city
        })
        setTimeout(() => {
            this.componentDidMount()
        }, 250);
    }

    render(){
        const { isLoaded, stations } = this.state
        if(isLoaded){
            return(
                stations.map(station => (
                    //triage de l'affichage des icones
                        //velo dispo
                    station.available_bikes > 0 ? 
                        <Marker position={station.position} icon={openIcon} key={station.name}>
                            <PopupVelo station={station} formulaire={this.props.formulaire} isReserved={this.props.isReserved}/>
                        </Marker>
                    :
                        //velo indispo
                        <Marker position={station.position} icon={closeIcon} key={station.name}>
                            <PopupVelo station={station} isReserved={this.props.isReserved}/>
                        </Marker>
                    )   
                )
            )
        }else{
            return(<p>Chargement . . .</p>)
        }
    }
}
export default MarkerVelo