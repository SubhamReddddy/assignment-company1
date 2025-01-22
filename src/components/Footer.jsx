import React from "react";

const Footer = () => {
  return (
    <div className="bg-red-700 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Section 1: Logo and Description */}
        <div>
          <img
            src="your-logo-url-here"
            alt="AVR Swarna Mahal"
            className="w-32 mb-4"
          />
          <p className="mb-4">
            Shop our entire lineup of fine faves in store, get styled and join
            the Fine Crew.
          </p>
          <p>Download Our free App</p>
          <img
            src="your-google-play-icon-url-here"
            alt="Google Play"
            className="mt-4 w-32 cursor-pointer"
          />
        </div>

        {/* Section 2: About AVRSM */}
        <div>
          <h3 className="text-lg font-bold mb-4">ABOUT AVRSM</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Find a Store</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Section 3: Customer Service */}
        <div>
          <h3 className="text-lg font-bold mb-4">CUSTOMER SERVICE</h3>
          <ul className="space-y-2">
            <li>Franchising</li>
            <li>Corporate Gifting</li>
            <li>Easy Money For Gold</li>
            <li>Help and Contact</li>
            <li>Jewellery Purchase Plan</li>
            <li>Bangle & Bracelet Size Guide</li>
            <li>Return Policy</li>
            <li>Shipping Policy</li>
            <li>AVRSM Live</li>
            <li>Track Order</li>
            <li>Book An Appointment</li>
            <li>Ring Size Guide</li>
            <li>Fixed Deposit</li>
          </ul>
        </div>

        {/* Section 4: Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
          <p>AVR Swarnamahal Jewellery Ltd.</p>
          <p>251-A Omalur Main Road</p>
          <p>Swarnapuri, Salem-636 004</p>
          <p>Tamil Nadu, India.</p>
          <p className="mt-4">Toll Free:</p>
          <p>Tamil Nadu - 18004253307</p>
          <p>Karnataka - 18004250007</p>
          <p className="mt-4">EMAIL - info@avrswarnamahal.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
