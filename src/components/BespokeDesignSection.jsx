import React from "react";

const BespokeDesignSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white py-10 px-6 md:px-16">
      {/* Left Side: Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://avrswarnamahal.com/assets/imgs/new-home-imgs/AVR-create.jpg"
          alt="Bespoke Necklace Design"
          className="max-w-full h-auto"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10">
        <h2 className="text-3xl font-bold text-red-700 mb-4 text-center">
          CREATE A BESPOKE DESIGN
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Unlimited imagination, a heritage of exceptional craftsmanship, and
          passion for creating your dream come true with jewellery crafted by
          our finest designers. All these and more are exalted in AVR Swarna
          Mahal Jewellers Bespoke initiative. Working in close collaboration
          with clients, AVR Swarna Mahal Jewellers transforms each unique
          request into a dazzling reality. In the realm of bespoke, no limits
          exist. Beautiful, audacious, awe-inspiring, unforgettable… and much
          more, each creation is a unique work of fine art, brought to life by
          AVR Swarna Mahal Jewellers craftsman.
        </p>
        <div className="flex justify-center">
          <button className="bg-red-700 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-red-800">
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default BespokeDesignSection;
