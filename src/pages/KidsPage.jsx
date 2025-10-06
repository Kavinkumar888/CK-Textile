import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { productsData } from '../assets/data';
import { FaBed } from 'react-icons/fa';
import { FiTag } from 'react-icons/fi';

const KidsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [notification, setNotification] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // State for modal
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === 'All'
    ? productsData.kids
    : productsData.kids.filter(product => product.category === selectedCategory);

  const subcategories = [
    { name: 'All', icon: <FiTag size={18} /> },
    { name: 'Bedding', icon: <FaBed size={18} /> },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} has been added to the cart!`);
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap bg-gray-100 min-h-screen">
      {/* Left Sidebar: Categories */}
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
      <div className="lg:w-3/4 p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-6 shadow-lg rounded-lg transform transition-all hover:scale-105">
              {/* Clickable Image for Popup */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover mb-4 rounded-md cursor-pointer"
                onClick={() => setSelectedImage(product.image)}
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

      {/* Image Popup Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            {/* Displaying the Selected Image */}
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

      {/* Notification Popup */}
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg opacity-90 transition-all transform ease-in-out duration-500">
          {notification}
        </div>
      )}
    </div>
  );
};

export default KidsPage;
