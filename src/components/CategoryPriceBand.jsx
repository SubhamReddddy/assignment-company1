import React from "react";

function CategoryPriceBand() {
  return (
    <div className="bg-white border-t-4 border-red-700 fixed w-screen h-screen top-36 left-0">
      <div
        className="container mx-auto px-6 py-8 grid gap-6"
        style={{ gridTemplateColumns: "60% 15% 20%" }}
      >
        {/* Categories Section */}
        <div>
          <h2 className="text-lg font-bold text-red-700">Category</h2>
          <div className="border-t-2 border-dotted border-red-700 mt-2 mb-4"></div>
          <div className="grid grid-cols-4 gap-4">
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
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={item.img} alt={item.name} className="h-12 mb-2" />
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price Band Section */}
        <div>
          <h2 className="text-lg font-bold text-red-700">Price Band</h2>
          <div className="border-t-2 border-dotted border-red-700 mt-2 mb-4"></div>
          <ul className="space-y-2">
            {[
              "< 5000",
              "5k - 10k",
              "10k - 20k",
              "20k - 30k",
              "30k - 40k",
              "40k - 50k",
              "> 50k",
            ].map((price, index) => (
              <li key={index} className="text-sm">
                {price}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://avrswarnamahal.com/assets/imgs/megamenu/jewellery.jpg" // Replace with the path to your image
            alt="Jewellery Model"
            className="h-auto max-w-full rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default CategoryPriceBand;
