import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="mt-16 lg:mt-36">
      <div>
        <div>
          <img
            src="https://admin.avrswarnamahal.com/wp-content/uploads/2024/07/webkk2_.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://admin.avrswarnamahal.com/wp-content/uploads/2024/07/webkk2_.jpg"
            alt=""
          />
        </div>
      </div>
    </Slider>
  );
}
