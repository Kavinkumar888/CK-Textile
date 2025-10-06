import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { productsData } from '../assets/data'; // Ensure data is correctly imported
import { FaBed } from 'react-icons/fa'; // Import only FaBed from FontAwesome
import { FiTag } from 'react-icons/fi'; // Import FiTag from Feather Icons (react-icons/fi)

const BedroomPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [notification, setNotification] = useState(null); // State for the notification
  const [popupImage, setPopupImage] = useState(null); // State for popup image
  const { addToCart } = useCart();

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? productsData.bedroomsets || [] // Fallback to an empty array if undefined
      : (productsData.bedroomsets || []).filter(
          (product) => product.category === selectedCategory
        );

  // List of subcategories for bedroom items with icons
  const subcategories = [
    { name: 'All', icon: <FiTag size={18} /> }, // Icon for 'All' from Feather Icons
    { name: 'Bedding', icon: <FaBed /> }, // Icon for Bedding from FontAwesome
    { name: 'Super King Size Bedding', icon: <FaBed /> }, // Icon for Bedding from FontAwesome
  ];

  // Function to handle adding product to the cart and show a notification
  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} has been added to the cart!`);
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap bg-gray-100 min-h-screen">
      {/* Left Sidebar: Subcategories */}
      <div className="lg:w-1/4 sm:w-full bg-white p-6 shadow-lg rounded-lg lg:block sm:block">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Shop by Category</h2>
        <ul className="space-y-6">
          {subcategories.map((subcategory) => (
            <li
              key={subcategory.name}
              onClick={() => setSelectedCategory(subcategory.name)}
              className={`flex items-center cursor-pointer px-4 py-3 rounded-md transition-all duration-300
                ${selectedCategory === subcategory.name
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                }`}
            >
              <span className="mr-3 text-2xl">{subcategory.icon}</span>
              <span>{subcategory.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content: Products */}
      <div className="lg:w-3/4 p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-6 shadow-lg rounded-lg transform transition-all hover:scale-105">
              {/* Image Clickable for Popup */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover mb-4 rounded-md cursor-pointer"
                onClick={() => setPopupImage(product.image)}
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{product.description}</p>
              <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
                <span className="text-2xl font-bold">₹{product.price}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>

      {/* Custom Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg opacity-90 transition-all transform ease-in-out duration-500">
          {notification}
        </div>
      )}

      {/* Popup Modal for Image */}
      {popupImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setPopupImage(null)}
        >
          <div className="relative">
            <button
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full text-xl font-bold"
              onClick={() => setPopupImage(null)}
            >
              ✕
            </button>
            <img src={popupImage} alt="Popup" className="max-w-full max-h-screen rounded-lg shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default BedroomPage;
