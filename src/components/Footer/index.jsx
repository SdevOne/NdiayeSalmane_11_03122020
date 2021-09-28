import React, { Component } from "react"
import logo2 from "../../assets/logo2.png"
import "../../styles/Footer.css"

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <img className="footer-logo" src={logo2} alt="kasa" />
        <p className="footer-title">© 2020 Kasa. All rights reserved</p>
      </footer>
    )
  }
}
