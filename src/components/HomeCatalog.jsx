import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../assets/data';

const HomeCatalog = () => {
  const categories = Object.keys(productsData); // Get category keys (e.g., men, women, kids)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Shop by Category</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Loop through categories */}
        {categories.map((categoryKey) => {
          const categoryProducts = productsData[categoryKey]; // Get products for the current category
          const previewProducts = categoryProducts.slice(0, 6); // Show only the first 6 products

          return (
            <div key={categoryKey} className="bg-white shadow rounded-lg p-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                {categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)} {/* Capitalize category */}
              </h2>

              <div className="grid grid-cols-2 gap-2">
                {/* Loop through the top 6 products in the current category */}
                {previewProducts.map((product) => (
                  <div key={product.id} className="overflow-hidden rounded-lg">
                    {/* Link to the category page */}
                    <Link to={`/${categoryKey}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-32 w-full object-cover hover:scale-105 transition-transform"
                      />
                    </Link>
                    <h3 className="mt-2 text-lg font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <p className="text-xl font-semibold text-gray-800 mb-4">₹{product.price}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <Link
                  to={`/${categoryKey}`}
                  className="text-blue-500 hover:underline"
                >
                  View All {categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCatalog;
