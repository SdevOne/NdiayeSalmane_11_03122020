import React, { Component } from "react"
import "../../styles/Loader.css"

export default class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <div className="loader__dot">.</div>
        <div className="loader__dot">.</div>
        <div className="loader__dot">.</div>
      </div>
    )
  }
}
