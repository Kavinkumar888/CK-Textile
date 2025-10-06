// src/components/WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // You can use the react-icons package for the WhatsApp logo

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/1234567890"; // Replace with your actual WhatsApp number

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
