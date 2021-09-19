import React, { Component } from "react"
import leftArrow from "../../assets/leftArrow.svg"
import rightArrow from "../../assets/rightArrow.svg"
import "../../styles/Carrousel.css"

export default class Carrousel extends Component {
  state = { current: 0 }

  render() {
    const images = this.props.images
    const { current } = this.state
    const lastImg = images.length - 1
    const imgCount = current + 1
    const lastImgCount = lastImg + 1

    const previousImg = () => {
      current === 0
        ? this.setState({ current: lastImg })
        : this.setState({ current: current - 1 })
    }

    const nextImg = () => {
      current === lastImg
        ? this.setState({ current: 0 })
        : this.setState({ current: current + 1 })
    }

    return (
      <section className="carrousel">
        {lastImg !== 0 ? (
          <>
            <button className="carrousel__prevBtn" onClick={previousImg}>
              <img src={leftArrow} alt="" className="carrousel__leftArrow" />
            </button>
            <button className="carrousel__nextBtn" onClick={nextImg}>
              <img src={rightArrow} alt="" className="carrousel__rightArrow" />
            </button>
          </>
        ) : null}

        <img src={images[current]} alt="" className="carrousel__img" />
        <span className="carrousel__img-count">
          {imgCount}/{lastImgCount}
        </span>
      </section>
    )
  }
}
