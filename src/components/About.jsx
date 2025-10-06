import React from 'react';
import logo from '../assets/logo.png';  // Make sure you have the logo image in the appropriate folder

const About = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="flex items-center justify-start mb-8">
        {/* Logo on the Left */}
        
        
        {/* Center Title */}
        <h1 className="text-3xl font-bold text-center flex-grow">About CK Textile</h1>
      </div>

      {/* About Content with Image on the Left */}
      <div className="flex flex-col sm:flex-col lg:flex-row items-center space-x-8">
        {/* Image on the Left */}
        <div className="flex-shrink-0">
          <img src={logo} alt="CV Textile Logo" className="h-auto w-72" />
        </div>

        {/* Text Content on the Right */}
        <div className="text-lg text-gray-700 space-y-6">
          <p>
            Welcome to CK Textile, your premier destination for high-quality clothing and fashion
            apparel online. We specialize in providing a wide range of clothing options for men, women, 
            and kids, from everyday wear to premium designer pieces. Our mission is to bring you the 
            best in textile craftsmanship while offering stylish and affordable choices for every occasion.
          </p>
          
          <p>
            At CK Textile, we are committed to delivering the latest trends, comfortable fabrics, and 
            exceptional quality. Our online store makes shopping for clothes a seamless experience, 
            with easy navigation, secure payments, and fast shipping.
          </p>

          <p>
            Whether you're looking for casual wear, business attire, or trendy outfits for every season, 
            CK Textile has you covered. Our team is dedicated to bringing the best of textile fashion 
            to your door.
          </p>
          
          <p>
            Thank you for choosing CK Textile. We look forward to being a part of your fashion journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
