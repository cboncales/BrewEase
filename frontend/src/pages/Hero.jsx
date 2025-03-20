import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex items-center bg-[url('/images/bg1.jpg')] justify-start h-screen bg-cover bg-center">
      <div className="text-left bg-transparent bg-opacity-75 p-8 rounded-lg shadow-lg">
        <h1 className="solway text-5xl font-extrabold text-gray-200 mb-4">
          Welcome to BrewEase!☕
        </h1>
        <p className="text-xl text-gray-200 mb-6 w-1/2">
          Start your day with the perfect cup of coffee. Freshly brewed, just
          the way you love it—convenient, fast, and hassle-free with BrewEase.
        </p>
        <Link
          to="/menu"
          className="px-6 py-3 bg-amber-900 shadow-xl cursor-pointer text-white font-semibold rounded-lg hover:bg-amber-800 transition duration-300"
        >
          Explore Our Menu
        </Link>
      </div>
    </div>
  );
}
