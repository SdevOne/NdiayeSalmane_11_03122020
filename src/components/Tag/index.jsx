import React, { Component } from "react"
import _uniqueId from "lodash/uniqueId"
import "../../styles/Tag.css"

export default class Tag extends Component {
  render() {
    const tag = this.props.tag
    const id = _uniqueId("tag-")
    return (
      <span className="tag" key={id}>
        {tag}
      </span>
    )
  }
}
