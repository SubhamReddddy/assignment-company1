import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { arr } from "./data";

export default function Slick3() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
    <Slider {...settings} className="mx-10 my-10">
      {arr.map((items) => {
        return (
          <div className="flex flex-col text-center px-5">
            <img src={items.img} alt="" className="w-full mb-2" />
            <p className="w-full mb-2">{items.name}</p>
            <button className="w-full bg-[#991e32] text-white mb-2">
              buy now
            </button>
            <p>{items.price}</p>
          </div>
        );
      })}
    </Slider>
  );
}
