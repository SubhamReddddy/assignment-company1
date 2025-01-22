import React from "react";

const ConnectWithUs = () => {
  const services = [
    {
      icon: "https://avrswarnamahal.com/assets/imgs/new-whats.png",
      title: "Connect On",
      subtitle: "WhatsApp",
      action: "Connect",
    },
    {
      icon: "https://avrswarnamahal.com/assets/imgs/new-calen.png",
      title: "Book",
      subtitle: "Appointment",
      action: "Book",
    },
    {
      icon: "https://avrswarnamahal.com/assets/imgs/new-video.png",
      title: "Schedule a",
      subtitle: "Video Call",
      action: "Schedule",
    },
    {
      icon: "https://avrswarnamahal.com/assets/imgs/new-text.png",
      title: "Contact us",
      subtitle: "Chat with Us",
      action: "Connect",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-red-700">CONNECT WITH US</h1>
        <p className="text-gray-600 mt-2">
          We are always available to guide you at your convenience.
        </p>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-red-50 rounded-full py-8 px-4 shadow-md"
          >
            <img
              src={service.icon}
              alt={service.subtitle}
              className="w-16 h-16 mb-4"
            />
            <p className="text-gray-700 text-sm">{service.title}</p>
            <h2 className="text-lg font-semibold text-gray-900">
              {service.subtitle}
            </h2>
            <p className="text-gray-500 text-sm mt-2">{service.action}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectWithUs;
