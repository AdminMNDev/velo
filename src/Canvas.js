import React, { Component } from 'react'
import './Canvas.css'

class CanvasReservation extends Component{
    constructor(props){
        super(props)
    this.state = {
    }
}

  render(){
    return(
        <div>
            <canvas className="canvas"/>
        </div>
    )
  }
}
export default CanvasReservation