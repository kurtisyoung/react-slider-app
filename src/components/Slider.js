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
      items: [],
      copyright: null
    };
  }

  componentDidMount() {
    fetch(`https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=30&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
          this.setState({
            isLoaded: true,
            items: result.data.results,
            copyright: result.attributionText
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
    const { error, isLoaded, items, copyright } = this.state;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      arrows: true,
      responsive: [
        {
          breakpoint: 1290,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
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
      return (
        <div className="loading">
          <img src="./assets/spider-man.gif" alt="Loading..."/>
          <h2>Loading...</h2>
        </div>
      )
    } else {
      return (
        <div>
          <SlickSlider {...settings}>
            {
              items.map(item => {
                if(!item.thumbnail.path.includes('image_not_available')) {
                  return (
                    <div key={item.name} className="slider-item">
                      <div className="img-wrapper">
                        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name}/>
                      </div>
                      <h2>{item.name}</h2>
                    </div>
                  )
                }
              })
            }
          </SlickSlider>
          <p>{copyright}</p>
        </div>
      );
    }
  }
}
