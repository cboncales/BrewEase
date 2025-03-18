import { Link } from "react-router-dom";

// Import your coffee images
import americano from "../assets/images/americano.jpeg";
import blackCoffee from "../assets/images/blackcoffee.jpg";
import cappuccino from "../assets/images/cappucino.jpg";
import espresso from "../assets/images/espresso.jpg";
import flatWhite from "../assets/images/flat-white.jpg";
import latte from "../assets/images/latte.jpg";
import mocha from "../assets/images/mocha2.jpg";
import irishCoffee from "../assets/images/original-irish.jpg";
import macchiato from "../assets/images/espresso-macchiato.jpg";

export default function Menu() {
  const coffeeMenu = [
    { name: "Americano", image: americano },
    { name: "Black Coffee", image: blackCoffee },
    { name: "Cappuccino", image: cappuccino },
    { name: "Espresso", image: espresso },
    { name: "Flat White", image: flatWhite },
    { name: "Latte", image: latte },
    { name: "Mocha", image: mocha },
    { name: "Irish Coffee", image: irishCoffee },
    { name: "Espresso Macchiato", image: macchiato },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-22 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Menu
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeMenu.map((coffee, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={coffee.image}
                alt={coffee.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {coffee.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/"
            className="px-6 py-3 bg-amber-900 text-white font-semibold rounded-lg hover:bg-amber-800 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
