import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Slick() {
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
    <Slider {...settings} className="mx-10">
      {[
        {
          name: "Bangle",
          img: "https://avrswarnamahal.com/assets/imgs/sub-menu/Gold-Bangle.jpg",
        },
        {
          name: "Bracelet",
          img: "https://avrswarnamahal.com/assets/imgs/sub-menu/Gold-Bracelet.jpg",
        },
        {
          name: "Chain",
          img: "https://avrswarnamahal.com/assets/imgs/sub-menu/Gold-Bracelet.jpg",
        },
        {
          name: "Choker",
          img: "https://avrswarnamahal.com/assets/imgs/sub-menu/Gold-Choker.jpg",
        },
        {
          name: "Earring",
          img: "https://avrswarnamahal.com/assets/imgs/sub-menu/Gold-Earring.jpg",
        },
        {
          name: "Gold Coin",
          img: "https://avrswarnamahal.com/assets/imgs/sub-menu/Gold-Coin.jpg",
        },
        {
          name: "Haram",
          img: "https://avrswarnamahal.com/assets/imgs/sub-menu/Gold-Haram.jpg",
        },
        {
          name: "Necklace",
          img: "https://avrswarnamahal.com/assets/imgs/sub-menu/Gold-Necklace.jpg",
        },
        {
          name: "Nosepin",
          img: "https://avrswarnamahal.com/assets/imgs/sub-menu/Gold-Nosepin.jpg",
        },
        {
          name: "Pendant",
          img: "https://avrswarnamahal.com/assets/imgs/sub-menu/Gold-Pendant.jpg",
        },
        {
          name: "Ring",
          img: "https://avrswarnamahal.com/assets/imgs/sub-menu/Gold-RIng.jpg",
        },
        {
          name: "Thali",
          img: "https://avrswarnamahal.com/assets/imgs/sub-menu/Gold-Thali.jpg",
        },
        {
          name: "Toys For Boys",
          img: "https://avrswarnamahal.com/assets/imgs/sub-menu/Toys-For-Boys.jpg",
        },
      ].map((items) => {
        return (
          <div className="flex flex-col items-center text-center">
            <img src={items.img} alt="" className="w-full" />
            <p className="w-full">{items.name}</p>
          </div>
        );
      })}
    </Slider>
  );
}
