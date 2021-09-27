import React, { Component } from "react"
import _uniqueId from "lodash/uniqueId"
import Header from "../components/Header"
import Loader from "../components/Loader"
import Carrousel from "../components/Carrousel"
import Tag from "../components/Tag"
import Dropdown from "../components/Dropdown"
import Footer from "../components/Footer"
import "../styles/Housing.css"
import filledStar from "../assets/filledStar.svg"
import emptyStar from "../assets/emptyStar.svg"

export default class Housing extends Component {
  _isMounted = false
  state = { data: {}, isLoading: true }

  componentDidMount() {
    this._isMounted = true
    const fetchData = async () => {
      const { id } = this.props.match.params
      const response = await fetch(`/api/data.json`)
      const jsonRes = await response.json()
      if (jsonRes) {
        const housing = Object.values(jsonRes).find((elt) => elt.id === id)
        if (!housing) {
          this.props.history.push("/Error")
        }
        if (this._isMounted) {
          this.setState({ data: housing })
          this.setState({ isLoading: false })
        }
      }
    }
    fetchData()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { data, isLoading } = this.state
    let result = []
    if (data) {
      for (let i = 0; i < 5; i++) {
        const id = _uniqueId("star-")
        i < data.rating
          ? result.push(
              <img src={filledStar} alt="" className="housing__star" key={id} />
            )
          : result.push(
              <img src={emptyStar} alt="" className="housing__star" key={id} />
            )
      }
    }

    return (
      <>
        <Header />
        {isLoading ? (
          <Loader />
        ) : (
          <main>
            <Carrousel images={data.pictures} />
            <section className="housing">
              <div className="housing__txt-container">
                <div className="housing__description">
                  <h1 className="housing__title">{data.title}</h1>
                  <p className="housing__location">{data.location}</p>
                  <div className="housing__tag-container">
                    {data.tags.map((tag) => (
                      <Tag tag={tag} key={tag} />
                    ))}
                  </div>
                </div>
                <div className="housing__host-container">
                  <div className="housing__host">
                    <p className="housing__host-name">{data.host.name}</p>
                    <img
                      src={data.host.picture}
                      alt={data.host.name}
                      className="housing__host-picture"
                    />
                  </div>
                  <span className="housing__rating">
                    {result.map((star) => star)}
                  </span>
                </div>
              </div>
              <div className="housing__dropdown-container">
                <Dropdown title="Description" content={data.description} />
                <Dropdown title="Équipements" content={data.equipments} />
              </div>
            </section>
          </main>
        )}
        <Footer />
      </>
    )
  }
}
