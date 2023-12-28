import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from '@mui/material/Typography'
const TextTicker = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "linear"
  };
  return <div>
    <Slider {...settings}>
      <div>
        <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#37B57E" }}>
          Engaging
        </Typography>
      </div>
      <div>
        <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#37B57E" }}>
          Fun
        </Typography>

      </div>
      <div>
        <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#37B57E" }}>
          Relevant
        </Typography>

      </div>
      <div>
        <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#37B57E" }}>
          Holistic
        </Typography>

      </div>
    </Slider>
  </div>;
};

export default TextTicker;
