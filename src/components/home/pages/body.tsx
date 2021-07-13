// eslint-disable-next-line no-use-before-define
import React, { Component } from 'react'
import Slider from 'react-slick'
import person1 from '../../../images/ok1.jpg'

export default class Body extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div>
                <Slider {...settings}>
          <div className="bg-light-blue-600 opacity-100">
          <img src={person1} alt="" className="rounded bg-light-blue-600 opacity-100" />
           <span>byeee</span>
          </div>
          <div>
          <img src={person1} alt="" className="rounded" />
          </div>
          <div>
          <img src={person1} alt="" className="rounded" />
          </div>
        </Slider>
      </div>
    )
  }
}
