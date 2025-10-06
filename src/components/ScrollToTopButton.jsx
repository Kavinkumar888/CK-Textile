import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Check if the page is scrolled and show the button when needed
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {  // Show button after 200px scroll
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle the scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 left-4 bg-orange-500 text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:bg-orange-400 focus:outline-none flex items-center justify-center"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
