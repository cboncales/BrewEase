import React from "react";
import { Link } from "react-router-dom";

export default function Location() {
  return (
    <div className="min-h-screen bg-[url('/images/bg1.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="min-h-screen bg-transparent bg-opacity-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-5xl font-bold text-center text-amber-600 mb-8">
            Our Location
          </h1>
          <p className="text-lg text-gray-200 mb-8 text-center">
            Visit us at BrewEase in Butuan City! We’re conveniently located in
            the heart of the city, offering a cozy space for you to enjoy your
            favorite coffee.
          </p>

          {/* Google Map Embed */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-600 mb-4">Find Us</h2>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                title="BrewEase Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1234567890123!2d125.12345678901234!3d8.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDcnMjQuNCJOIDEyNcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-600 mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-gray-200">
              <strong>Address:</strong> 123 BrewEase Street, Butuan City, Agusan
              del Norte, Philippines
            </p>
            <p className="text-lg text-gray-200">
              <strong>Phone:</strong> +63 123 456 7890
            </p>
            <p className="text-lg text-gray-200">
              <strong>Email:</strong> info@brewease.com
            </p>
            <p className="text-lg text-gray-200">
              <strong>Follow Us:</strong> brewease2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
