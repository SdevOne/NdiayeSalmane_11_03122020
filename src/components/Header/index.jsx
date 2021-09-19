import { Component } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "../../styles/Header.css"

export default class Header extends Component {
  render() {
    return (
      <header className="mainHeader">
        <img className="logo" src={logo} alt="kasa" />
        <nav className="navbar">
          <ul className="navList">
            <Link to="/">
              <li className="navItem">Accueil</li>
            </Link>
            <Link to="/About">
              <li className="navItem">A Propos</li>
            </Link>
          </ul>
        </nav>
      </header>
    )
  }
}
