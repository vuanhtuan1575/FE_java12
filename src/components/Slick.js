import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductItem from "./ProductItem";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        right: "0%",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        left: "0%",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

export default class Slick extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      lazyLoad: true,

      adaptiveHeight: true,

      arrows: true,
      autoplaySpeed: 5000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        {this.props.products &&
          this.props.products.map((item, index) => (
            <div className="px-2">
              <ProductItem product={item} key={index} />
            </div>
          ))}
      </Slider>
    );
  }
}
