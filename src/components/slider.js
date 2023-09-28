import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';

class PhotoSlider extends Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
  }

  componentDidMount() {
    this.slider.current.slickGoTo(this.props.images.length - 1);
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
      nextArrow: <SamplePrevArrow sliderRef={this.slider} />,
      prevArrow: <SampleNextArrow sliderRef={this.slider} />,
    };

    return (
      <div className='slider-box'>
        <Slider ref={this.slider} {...settings}>
          {this.props.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt='image' className='slider-image' />
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
      style={{ ...style, display: 'block', background: 'white' }}
      onClick={() => {
        if (sliderRef.current) {
          sliderRef.current.slickPrev();
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
      style={{ ...style, display: 'block', background: 'white' }}
      onClick={() => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      }}
    />
  );
}

export default PhotoSlider;
