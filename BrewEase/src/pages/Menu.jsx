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
    {
      name: "Americano",
      image: americano,
      description: "A smooth espresso diluted with hot water.",
      price: "₱199",
    },
    {
      name: "Black Coffee",
      image: blackCoffee,
      description: "Strong and bold, just the way you like it.",
      price: "₱142",
    },
    {
      name: "Cappuccino",
      image: cappuccino,
      description: "Espresso with steamed milk and foam.",
      price: "₱228",
    },
    {
      name: "Espresso",
      image: espresso,
      description: "A concentrated shot of coffee.",
      price: "₱114",
    },
    {
      name: "Flat White",
      image: flatWhite,
      description: "Creamy espresso with microfoam.",
      price: "₱256",
    },
    {
      name: "Latte",
      image: latte,
      description: "Espresso with steamed milk and a touch of foam.",
      price: "₱228",
    },
    {
      name: "Mocha",
      image: mocha,
      description: "Espresso with chocolate and steamed milk.",
      price: "₱256",
    },
    {
      name: "Irish Coffee",
      image: irishCoffee,
      description: "Coffee with whiskey, sugar, and cream.",
      price: "₱285",
    },
    {
      name: "Espresso Macchiato",
      image: macchiato,
      description: "Espresso with a dollop of foam.",
      price: "₱171",
    },
  ];

  const handleOrder = (coffeeName) => {
    alert(`You ordered a ${coffeeName}!`);
    // You can replace this with actual order logic (e.g., redirect to a checkout page).
  };

  return (
    <div
      className="min-h-screen bg-[url('/images/bg1.jpg')] bg-cover bg-fixed"
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
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
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-full h-32 object-fill"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {coffee.name}
                    </h2>
                    <span className="text-lg font-semibold text-amber-900">
                      {coffee.price}
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
    </div>
  );
}
