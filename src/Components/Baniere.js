import React, { Component } from 'react'
import "../css/baniere.css";

class BanniereVelo extends Component{

    render(){
        return(
            <div className="container-baniere">
                <div className="bordure-baniere">
                    <h1>Vélo' <span>Taff</span> vous accompagne à <span>chaque</span> instant</h1>
                </div>
            </div>
        )
    }
}

export default BanniereVelo