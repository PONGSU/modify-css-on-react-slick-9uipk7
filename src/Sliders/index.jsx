import React from 'react';
import Slider from 'react-slick';
import './Sliders.css';

const Sliders = ({ children }) => {
  const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props;

    return (
      <div {...props} className="custom-prevArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          display="flex"
          align-items="center"
          justify-content="center"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </div>
    );
  };
  const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props;

    return (
      <div {...props} className="custom-nextArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </div>
    );
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    className: 'center',
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    dots: true,
    slidesToShow: 2,
    speed: 500,
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Sliders;
