import React, { Component } from "react"
import Header from "../components/Header"
import img from "../assets/img.jpg"
import "../styles/Home.css"
import Card from "../components/Card"
import Footer from "../components/Footer"
import Banner from "../components/Banner"

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Banner title="Chez vous, partout et ailleurs" image={img} />
          <Card />
        </main>
        <Footer />
      </>
    )
  }
}

export default Home
