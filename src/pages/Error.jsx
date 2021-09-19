import React, { Component } from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/Error.css"

export default class Error extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="error">
          <h1 className="error__title">404</h1>
          <p className="error__text">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link to="/">
            <p className="error__link">Retourner sur la page d'accueil</p>
          </Link>
        </main>
        <Footer />
      </>
    )
  }
}
