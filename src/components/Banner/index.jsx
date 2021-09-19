import React, { Component } from "react"

export default class Banner extends Component {
  render() {
    const title = this.props.title
    const image = this.props.image
    return (
      <section className="banner">
        <div className="banner-filter"></div>
        {title !== "" ? <h1 className="banner-title">{title}</h1> : null}
        <img className="banner-img" src={image} alt="" />
      </section>
    )
  }
}
