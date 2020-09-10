import React, { Component, useState } from 'react';
import SlickSlider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.css";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random/20")
      .then(res => res.json())
      .then(result => {
          console.log(result)
          this.setState({
            isLoaded: true,
            items: result.message
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      centerPadding: '60px',
      className: 'center',
      responsive: [
        {
          breakpoint: 1290,
          settings: {
            slidesToShow: 6
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            arrows: false
          }
        }
      ]
    };

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <SlickSlider {...settings}>
          {
            items.map(item => (
              <div key={item} className="slider-item">
                <img src={item} alt=""/>
              </div>
            ))
          }
        </SlickSlider>
      );
    }
  }
}
