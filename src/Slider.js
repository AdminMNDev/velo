import React, { Component } from 'react'
import './Slider.css'
class SliderVelo extends Component{

    render(){
        return(
            <div className="container-slider">
                <h2>FONCTIONNEMENT DE L'APPLICATION</h2>
                <p className="border-bottom-slider"></p>
                <div className="slider">
                    <img src="moockup.jpg" alt="explication de l'application"></img>
                    <div className="text-slider">
                    <p>1 - Choisissez une station</p>
                    <p>Un panneau s'affiche lors du clic sur un marqueur
                    et vous avez la possibilité de réserver un vélo</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SliderVelo