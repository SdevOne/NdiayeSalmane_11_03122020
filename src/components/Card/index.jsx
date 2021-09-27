import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../../styles/Card.css"

export default class Card extends Component {
  state = { data: {} }

  componentDidMount() {
    const fetchData = async () => {
      const response = await fetch(`/api/data.json`)
      const jsonRes = await response.json()
      if (jsonRes) {
        this.setState({ data: jsonRes })
      }
    }
    fetchData()
  }

  render() {
    const { data } = this.state

    return (
      <section className="housing-container">
        {data &&
          Object.values(data).map(function (elt) {
            return (
              <Link to={`/Logement/${elt.id}`} key={elt.id}>
                <div className="card">
                  <div className="card-filter"></div>
                  <img className="card-img" src={elt.cover} alt={elt.title} />
                  <h2 className="card-title">{elt.title}</h2>
                </div>
              </Link>
            )
          })}
      </section>
    )
  }
}
