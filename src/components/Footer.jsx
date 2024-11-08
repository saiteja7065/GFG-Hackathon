// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>&copy; 2024 Dietify. All rights reserved.</p>
      <div className="mt-2">
        <Link 
          to="/contact" 
          className="text-blue-400 hover:underline transition duration-300 transform hover:scale-110"
        >
          Contact Us
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
