import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TestimonialSection = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-gray-100 py-5">
      <div className="lg:-mb-36">
        <h2 className="text-3xl font-bold text-red-700 mb-4 text-center">
          Customer Testimonials{" "}
        </h2>
        <h3 className="text-center">What they say</h3>
      </div>
      <Slider {...settings} className="mt-16 lg:mt-36">
        <div className="bg-[url(https://avrswarnamahal.com/testi-back.5dbf0af12729bee78070.png)] bg-no-repeat bg-cover bg-left">
          <div className="relative py-10 px-6 md:px-16">
            {/* Center Content */}
            <div className="text-center">
              <img
                src="https://avrswarnamahal.com/assets/imgs/about/about-brand2.png"
                alt="AVR Logo"
                className="mx-auto mb-4 w-24 h-auto"
              />
              <h1 className="text-2xl font-bold text-red-700 mb-2">
                AVR SWARNA MAHAL JEWELLERS
              </h1>
              <p className="text-sm text-gold-600 italic mb-4">
                Purity is our Tradition
              </p>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-6">
                Choosing AVR Swarna Mahal Jewellers means more than just fine
                jewellery; it means embracing a legacy of quality and beauty.
              </p>
              {/* Star Ratings */}
              <div className="flex justify-center mb-4">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="pink"
                      className="w-6 h-6"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
              </div>
              <p className="text-black font-semibold text-lg">Gopika Siva</p>
            </div>
          </div>
        </div>
        <div className="bg-[url(https://avrswarnamahal.com/testi-back.5dbf0af12729bee78070.png)] bg-no-repeat bg-cover bg-left">
          <div className="relative py-10 px-6 md:px-16">
            {/* Center Content */}
            <div className="text-center">
              <img
                src="https://avrswarnamahal.com/assets/imgs/about/about-brand2.png"
                alt="AVR Logo"
                className="mx-auto mb-4 w-24 h-auto"
              />
              <h1 className="text-2xl font-bold text-red-700 mb-2">
                AVR SWARNA MAHAL JEWELLERS
              </h1>
              <p className="text-sm text-gold-600 italic mb-4">
                Purity is our Tradition
              </p>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-6">
                Choosing AVR Swarna Mahal Jewellers means more than just fine
                jewellery; it means embracing a legacy of quality and beauty.
              </p>
              {/* Star Ratings */}
              <div className="flex justify-center mb-4">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="pink"
                      className="w-6 h-6"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
              </div>
              <p className="text-black font-semibold text-lg">Gopika Siva</p>
            </div>
          </div>
        </div>
        <div className="bg-[url(https://avrswarnamahal.com/testi-back.5dbf0af12729bee78070.png)] bg-no-repeat bg-cover bg-left">
          <div className="relative py-10 px-6 md:px-16">
            {/* Center Content */}
            <div className="text-center">
              <img
                src="https://avrswarnamahal.com/assets/imgs/about/about-brand2.png"
                alt="AVR Logo"
                className="mx-auto mb-4 w-24 h-auto"
              />
              <h1 className="text-2xl font-bold text-red-700 mb-2">
                AVR SWARNA MAHAL JEWELLERS
              </h1>
              <p className="text-sm text-gold-600 italic mb-4">
                Purity is our Tradition
              </p>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-6">
                Choosing AVR Swarna Mahal Jewellers means more than just fine
                jewellery; it means embracing a legacy of quality and beauty.
              </p>
              {/* Star Ratings */}
              <div className="flex justify-center mb-4">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="pink"
                      className="w-6 h-6"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
              </div>
              <p className="text-black font-semibold text-lg">Gopika Siva</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialSection;
