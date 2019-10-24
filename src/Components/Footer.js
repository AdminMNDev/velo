import React, { Component } from 'react'
import '../css/footer.css'

class FooterVelo extends Component{
  render(){
    return(
      <div className="container-footer">
      <div className="social-media">
        <a href="https://github.com/AdminMNDev/velo"><img src="github.png" alt="ico github" className="ico-github"></img></a>
        <a href="https://mathieu-raisin.fr"><img src="domain-registration.png" alt="ico github" className="ico-github"></img></a>
        </div>
        <p>© 2019 RAISIN Mathieu - Développeur web.<br></br><span>Refonte</span> d'un projet <span>OpenClassRooms</span> avec <span>React.js</span>.</p>
      </div>
    )
  }
}
export default FooterVelo