import React, { Component } from 'react'
import '../css/canvas.css'

class CanvasReservation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isNotEmpty: false
    }
    this.isDrawing = false
    this.isNotEmpty = false
  }
  componentDidMount(){
    this.canvas = this.refs.canvas
    this.ctx = this.canvas.getContext("2d")
  }

  getMousePos = (e) => {
    let rect = this.canvas.getBoundingClientRect()
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }

  //Dessin
  draw = (e) => {
    this.isDrawing = true
    let mousePos = this.getMousePos(e)
    this.ctx.beginPath()
    this.ctx.moveTo(mousePos.x, mousePos.y)
  }

  drawing = (e) => {
    if (this.isDrawing === true) {
      this.setState({
        isNotEmpty: true
      })
      this.props.isNotEmpty()
      let mousePos = this.getMousePos(e)
      this.ctx.lineTo(mousePos.x, mousePos.y)
      this.ctx.stroke()
    }
  }
  
  unDraw = () => {
    return(this.isDrawing = false)
  }

  //effacer le contenu de la signature
  clear = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.setState({
      isNotEmpty: false
    })

  }

  render() {
    return (
    <div >
      <canvas width={300} height={200} ref="canvas" className = "canvas" onMouseDown={this.draw} onMouseMove={this.drawing} onMouseUp={this.unDraw} onMouseLeave={this.unDraw} />
      {this.state.isNotEmpty ? <button onClick={this.clear} className="clear-button">Effacer</button> : ''}
    </div>
    )
  }
}
export default CanvasReservation