import React from "react";
import { FaAmazon, FaHome, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import meesho from '../assets/Meesho_logo.png';
import flipkart from '../assets/flipkart.png';

const ContactUs = () => {
  return (
    <div className="bg-white p-8 md:p-12 lg:p-16 rounded-lg shadow-lg w-full">
      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
        Contact Us
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        We are available on multiple platforms to make it easy for you to reach us anytime, anywhere.
      </p>

      <div className="flex gap-[30px] sm:gap-[50px] md:gap-10 lg:gap-20 items-center justify-center">
        {/* Amazon */}
        <a
          href="https://www.amazon.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-2 mb-[-18px] group"
        >
          <FaAmazon className="text-3xl text-orange-500 transition-transform transform group-hover:scale-110 " />
          <span className="font-semibold text-xl text-gray-700 transition-colors group-hover:text-blue-600">
            Amazon
          </span>
        </a>

        {/* Flipkart */}
        <a
          href="https://www.flipkart.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-2 group"
        >
          <img
            src={flipkart}
            alt="Flipkart Logo"
            className="h-12 transition-transform transform group-hover:scale-110"
          />
          <span className="font-semibold text-xl text-gray-700 transition-colors group-hover:text-blue-600">
            Flipkart
          </span>
        </a>

        {/* Meesho */}
        <a
          href="https://www.meesho.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-2 group"
        >
          <img
            src={meesho}
            alt="Meesho Logo"
            className="h-12 transition-transform transform group-hover:scale-110"
          />
          <span className="font-semibold text-xl text-gray-700 transition-colors group-hover:text-blue-600">
            Meesho
          </span>
        </a>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-2 text-lg">
          For more details, visit us at:
        </p>
        <a
          href="https://www.cktextileszone.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-bold text-2xl hover:underline flex justify-center items-center gap-2 transition-transform transform hover:scale-105"
        >
          <FaHome className="text-4xl transition-transform transform hover:scale-125" />
          www.cktextileszone.in
        </a>
      </div>

      {/* Social Media Links */}
      <div className="mt-12 text-center ">
        <p className="text-lg text-gray-600 mb-6">
          Connect with us on social media:
        </p>
        <div className="flex gap-5 justify-center">
          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 group"
          >
            <FaInstagram className="text-3xl text-pink-600 transition-transform transform group-hover:scale-110" />
            <span className="font-semibold text-xl text-gray-700 transition-colors group-hover:text-pink-500">
              Instagram
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 group"
          >
            <FaWhatsapp className="text-3xl text-green-500 transition-transform transform group-hover:scale-110" />
            <span className="font-semibold text-xl text-gray-700 transition-colors group-hover:text-green-600">
              WhatsApp
            </span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 group"
          >
            <FaFacebook className="text-3xl text-blue-600 transition-transform transform group-hover:scale-110" />
            <span className="font-semibold text-xl text-gray-700 transition-colors group-hover:text-blue-500">
              Facebook
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
