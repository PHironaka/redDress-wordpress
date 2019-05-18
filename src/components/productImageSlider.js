import React from 'react';
import Slider from "react-slick";
import PropTypes from 'prop-types';

const ProductImageSlider = ({ children }) =>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
      <Slider {...settings}>
          {children}
      </Slider>
    )
  }
  ProductImageSlider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export default ProductImageSlider