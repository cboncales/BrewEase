import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-[url('/images/bg1.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="min-h-screen bg-transparent bg-opacity-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-5xl font-bold text-center text-amber-600 mb-8">
            About BrewEase
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Welcome to BrewEase, where every cup tells a story. At BrewEase, we
            believe that coffee is more than just a drink—it’s an experience, a
            moment of comfort, and a way to connect with others. Our mission is
            to craft the perfect cup of coffee while creating a warm, inviting
            space for our community to gather, relax, and recharge.
          </p>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-600 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-200">
              BrewEase was born out of a love for coffee and a desire to share
              that passion with the world. Founded in 2023 by Juan, our coffee
              shop started as a small dream in Butuan City. Over the years,
              we’ve grown into a beloved local spot, known for our carefully
              sourced beans, expertly brewed drinks, and welcoming atmosphere.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-600 mb-4">
              Our Coffee
            </h2>
            <p className="text-lg text-gray-200">
              We take pride in every step of the coffee-making process. From
              sourcing the finest beans from sustainable farms around the world
              to roasting them to perfection, we ensure that every cup of coffee
              is a masterpiece. Whether you prefer a classic espresso, a creamy
              latte, or a refreshing cold brew, our skilled baristas are here to
              craft your perfect drink.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-600 mb-4">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-200">
              <li className="mb-2">
                <strong>Quality:</strong> We use only the best ingredients and
                techniques to create exceptional coffee.
              </li>
              <li className="mb-2">
                <strong>Sustainability:</strong> We’re committed to ethical
                sourcing and reducing our environmental footprint.
              </li>
              <li className="mb-2">
                <strong>Community:</strong> BrewEase is more than a coffee
                shop—it’s a place where friends, families, and neighbors come
                together.
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-600 mb-4">
              Our Space
            </h2>
            <p className="text-lg text-gray-200">
              Step into BrewEase and feel right at home. Our cozy, thoughtfully
              designed space is the perfect backdrop for your morning coffee, an
              afternoon work session, or a casual meet-up with friends. With
              free Wi-Fi, comfortable seating, and a relaxing ambiance, we’ve
              created a space where everyone feels welcome.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-600 mb-4">Join Us</h2>
            <p className="text-lg text-gray-200">
              We invite you to visit BrewEase and experience the difference for
              yourself. Whether you’re a coffee connoisseur or just looking for
              a great place to unwind, we’re here to make your day a little
              brighter, one cup at a time.
            </p>
            <p className="text-lg text-gray-200 mt-4">
              Thank you for being part of our journey. We can’t wait to serve
              you!
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-600 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-200">
              <strong>Address:</strong> Butuan City
            </p>
            <p className="text-lg text-gray-200">
              <strong>Phone:</strong> 09123456789
            </p>
            <p className="text-lg text-gray-200">
              <strong>Email:</strong> juan@gmail.com
            </p>
            <p className="text-lg text-gray-200">
              <strong>Follow Us:</strong> brewease2023
            </p>
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
