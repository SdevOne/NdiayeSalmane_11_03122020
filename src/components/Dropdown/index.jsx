import React, { Component } from "react"
import arrowUp from "../../assets/arrowUp.svg"
import arrowDown from "../../assets/arrowDown.svg"
import "../../styles/Dropdown.css"

export default class Dropdown extends Component {
  state = { isClose: true }

  render() {
    const data = this.props
    const { isClose } = this.state
    const handleDropdown = () => {
      isClose === true
        ? this.setState({ isClose: false })
        : this.setState({ isClose: true })
    }
    let handleDropdownOpening = "dropdown__content dropdown__inactive"
    if (isClose === false) {
      handleDropdownOpening = "dropdown__content"
    }
    let handleDropdownSize = "dropdown"
    if (data.size === "large") {
      handleDropdownSize = "dropdown__large"
    }

    return (
      <section className={handleDropdownSize}>
        <div className="dropdown__btn">
          <h3 className="dropdown__title">{data.title}</h3>
          <button className="dropdown__arrow">
            <img
              src={isClose === false ? arrowUp : arrowDown}
              alt=""
              onClick={handleDropdown}
              className="dropdown__arrowIcon"
            />
          </button>
        </div>
        <div className={handleDropdownOpening}>
          {data.title === "Équipements" ? (
            <ul className="dropdown__content-txt">
              {data.content.map((elt, idx) => (
                <li key={idx}>{elt}</li>
              ))}
            </ul>
          ) : (
            <p className="dropdown__content-txt">{data.content}</p>
          )}
        </div>
      </section>
    )
  }
}
