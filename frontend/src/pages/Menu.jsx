import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Menu() {
  const [coffeeMenu, setCoffeeMenu] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get("http://localhost:5000/api/coffees")
      .then((response) => {
        setCoffeeMenu(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleOrder = (coffeeName) => {
    alert(`You ordered a ${coffeeName}!`);
    // You can replace this with actual order logic (e.g., redirect to a checkout page).
  };

  return (
    <div className="min-h-screen bg-[url('/images/bg1.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="min-h-screen bg-opacity-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-200 mb-8">
            Our Menu
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coffeeMenu.map((coffee, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 flex flex-col"
              >
                <img
                  src={coffee.image_url}
                  alt={coffee.name}
                  className="w-full h-32 object-fill"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {coffee.name}
                    </h2>
                    <span className="text-lg font-semibold text-amber-900">
                      ₱{coffee.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 flex-grow">
                    {coffee.description}
                  </p>
                  <button
                    onClick={() => handleOrder(coffee.name)}
                    className="w-full mt-4 px-4 py-2 bg-amber-900 text-white font-semibold rounded-lg hover:bg-amber-800 transition duration-300"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
