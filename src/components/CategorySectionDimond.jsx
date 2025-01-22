import React from "react";

function CategorySectionDimond() {
  return (
    <div className="bg-white border-t-4 border-red-700 fixed w-screen h-screen top-36 left-0">
      <div
        className="mx-auto px-6 py-8 grid gap-6"
        style={{ gridTemplateColumns: "15% 15% 15% 15% 30%" }}
      >
        {/* Category Section */}
        <div>
          <h2 className="text-lg font-bold text-red-700">Category</h2>
          <div className="border-t-2 border-dotted border-red-700 mt-2 mb-4"></div>
          <ul className="space-y-2 text-sm">
            {[
              "Bangle",
              "Bracelet",
              "Chain",
              "Choker",
              "Earring",
              "Gold Coin",
              "Haram",
              "Necklace",
              "Pendant",
              "Ring",
              "Thali",
              "Toys For Boys",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Collections Section */}
        <div>
          <h2 className="text-lg font-bold text-red-700">Collections</h2>
          <div className="border-t-2 border-dotted border-red-700 mt-2 mb-4"></div>
          <ul className="space-y-2 text-sm">
            {[
              "Disney",
              "Aarna",
              "Mahima",
              "Mantra",
              "Varam",
              "Dhriti",
              "Isha",
              "Dhiraya",
              "Meera",
              "Janvi",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Occasion Section */}
        <div>
          <h2 className="text-lg font-bold text-red-700">Occasion</h2>
          <div className="border-t-2 border-dotted border-red-700 mt-2 mb-4"></div>
          <ul className="space-y-2 text-sm">
            {[
              "Daily Wear",
              "Wedding",
              "Casual",
              "Wedding And Casual",
              "Party Wear",
              "Traditional",
              "Daily",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Gender Section */}
        <div>
          <h2 className="text-lg font-bold text-red-700">Gender</h2>
          <div className="border-t-2 border-dotted border-red-700 mt-2 mb-4"></div>
          <ul className="space-y-2 text-sm">
            {["Kids", "Women", "Men"].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://avrswarnamahal.com/assets/imgs/megamenu/diamond.jpg" // Replace with the path to your image
            alt="Jewellery"
            className="h-auto max-w-full rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default CategorySectionDimond;
