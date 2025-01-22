import React from "react";

const AssuranceSection = () => {
  return (
    <div className="flex flex-col py-8 bg-white lg:flex-row lg:justify-around">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-red-700 mb-6 text-center">
          AVR SWARNA MAHAL
        </h1>

        {/* Assurance Badge */}
        <div className="mb-10 flex flex-col items-center">
          <img
            src="https://avrswarnamahal.com/assets/imgs/new-home-imgs/assurence-img.png"
            alt=""
          />
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 max-w-4xl">
        {/* Each feature */}
        <Feature
          icon="https://avrswarnamahal.com/assets/imgs/new-home-imgs/ass-1.png"
          text="Certified Jewellery"
        />
        <Feature
          icon="https://avrswarnamahal.com/assets/imgs/new-home-imgs/ass-2.png"
          text="Total Transparency in Price"
        />
        <Feature
          icon="https://avrswarnamahal.com/assets/imgs/new-home-imgs/ass-3.png"
          text="Pay Only For Gold"
        />
        <Feature
          icon="https://avrswarnamahal.com/assets/imgs/new-home-imgs/ass-4.png"
          text="100% Buy Back on Diamonds*"
        />
        <Feature
          icon="https://avrswarnamahal.com/assets/imgs/new-home-imgs/ass-5.png"
          text="Accurate Appraisal of Old Jewellery"
        />
        <Feature
          icon="https://avrswarnamahal.com/assets/imgs/new-home-imgs/ass-6.png"
          text="Secured Jewellery Purchase Plan"
        />
      </div>
    </div>
  );
};

const Feature = ({ icon, text }) => (
  <div className="flex flex-col items-center text-center">
    <img
      src={icon}
      className="w-16 h-16 flex items-center justify-center bg-red-700 text-white rounded-full text-2xl mb-2"
    />
    <p className="text-gray-700 font-medium">{text}</p>
  </div>
);

export default AssuranceSection;
