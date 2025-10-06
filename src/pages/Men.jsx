import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { productsData } from '../assets/data';
import { FiTag, FiBox, FiShield } from 'react-icons/fi';
import { RiShirtFill } from 'react-icons/ri';

const MenPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [notification, setNotification] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // For popup modal
  const { addToCart } = useCart();

  const products = productsData.men;

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const subcategories = [
    { name: 'All', icon: <FiTag size={18} /> },
    { name: 'T-Shirts', icon: <RiShirtFill size={18} /> },
    { name: 'Traditional Wear', icon: <FiBox size={18} /> },
    { name: 'Accessories', icon: <FiShield size={18} /> },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} has been added to the cart!`);
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  return (
    <div className="flex flex-wrap bg-gray-100">
      <div className="lg:w-1/4 sm:w-full lg:block sm:block bg-white p-6 shadow-lg rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Shop by Category</h2>
        <ul className="space-y-6">
          {subcategories.map((subcategory) => (
            <li
              key={subcategory.name}
              onClick={() => setSelectedCategory(subcategory.name)}
              className={`flex items-center cursor-pointer px-4 py-2 rounded-md transition-colors duration-300
                ${selectedCategory === subcategory.name
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                }`}
            >
              <span className="mr-3">{subcategory.icon}</span>
              <span>{subcategory.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:w-3/4 p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-6 shadow-lg rounded-md transition-transform transform hover:scale-105">
              {/* Image with onClick to open modal */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-md cursor-pointer"
                onClick={() => setSelectedImage(product.image)}
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="mt-4 flex flex-col sm:flex-col lg:flex-row justify-between items-center">
                <span className="text-xl font-bold">₹{product.price}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-200"
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

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            {/* Large Popup Image */}
            <img src={selectedImage} alt="Product" className="max-w-full max-h-screen rounded-lg shadow-lg" />
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full hover:bg-red-700"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg transition-all transform ease-in-out duration-500 opacity-90">
          {notification}
        </div>
      )}
    </div>
  );
};

export default MenPage;
