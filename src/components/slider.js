import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';

class PhotoSlider extends React.Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      centerMode: true,
      centerPadding: '0',
      nextArrow: <SamplePrevArrow sliderRef={this.slider} />, // Przekazanie referencji do strzałek
      prevArrow: <SampleNextArrow sliderRef={this.slider} />, // Przekazanie referencji do strzałek
    };

    return (
      <div className='slider-box'>
        <Slider ref={this.slider} {...settings}>
          {this.props.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt='image' className='image' />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

function SampleNextArrow(props) {
  const { className, style, onClick, sliderRef } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={() => {
        if (sliderRef.current) {
          sliderRef.current.slickPrev(); // Odwrócenie logiki przewijania
        }
      }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, sliderRef } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={() => {
        if (sliderRef.current) {
          sliderRef.current.slickNext(); // Odwrócenie logiki przewijania
        }
      }}
    />
  );
}

export default PhotoSlider;
