import React, { Component } from 'react'
import './Slider.css';

class SliderVelo extends Component{
    constructor(props){
        super(props)
        this.slideIndex = 1
        this.x = []
    }

    componentDidMount = () => {
        this.showDivs()
        setInterval(() => {
            this.plusDivs(+1)
        }, 5000);
    }

    plusDivs = n => {
    this.showDivs(this.slideIndex += n);
    }

    showDivs = (n) => {
        const x = document.getElementsByClassName("slide");
        if (n > x.length) {this.slideIndex = 1}
        if (n < 1) {this.slideIndex = x.length} ;
        for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[this.slideIndex-1].style.display = "flex";
}

    render(){
        return(
            <div className="container-slider">
                <h2>FONCTIONNEMENT DE L'APPLICATION</h2>
                <p className="border-bottom-slider"></p>
                <div className="slider">
                    <img onClick={() => this.plusDivs(-1)} className="avant" src="back.png" alt='arrow'></img>
                    <div className="slide">
                        <img src="1.png" alt="explication de l'application"></img>
                        <div className="text-slider">
                        <div className="sous-titre">
                            <p>1 - Choisisez une station</p>
                            <p className="border-soustitre-station"></p>
                        </div>
                            <p>Un panneau s'affiche lors du clic sur un marqueur
                            et vous avez la possibilité de réserver un vélo</p>
                        </div>
                    </div>
                    <div className="slide">
                        <img src="2.png" alt="explication de l'application"></img>
                        <div className="text-slider">
                        <div className="sous-titre">
                            <p>2 - Information de la station</p>
                            <p className="border-soustitre-station"></p>
                        </div>
                            <p>Sur le panneau, vous retrouver le nombre de vélo disponible, ainsi que
                            les places disponibles pour rendre votre vélo</p>
                        </div>
                    </div>
                <div className="slide">
                    <img src="3.png" alt="explication de l'application"></img>
                    <div className="text-slider">
                        <div className="sous-titre">
                            <p>3 - Réserver votre vélo</p>
                            <p className="border-soustitre-station"></p>
                        </div>
                            <p>Cliquez sur 'réserver', puis indiquez votre nom et prénom et signez dans le champ libre</p>
                        </div>
                    </div>
                <div className="slide">
                    <img src="4.png" alt="explication de l'application"></img>
                    <div className="text-slider">
                        <div className="sous-titre">
                            <p>4 - Status de la réservation</p>
                            <p className="border-soustitre-station"></p>
                        </div>
                        <p>Votre réservation expire automatiquement au bout de 20 minutes. Vous devez annuler la réservation
                        en cours pour effectuer de nouveau une réservation</p>
                    </div>
                </div>
                <img onClick={() => this.plusDivs(+1)} className="apres" src="next.png" alt='arrow'></img>
                </div>
            </div>
        )
    }
}

export default SliderVelo