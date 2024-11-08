// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({ isLoggedIn, onLogout }) {
  const location = useLocation();

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Dietify</h1>
        <nav className="flex items-center">
          <Link 
            to="/" 
            className={`mr-4 hover:underline transition duration-300 ${location.pathname === '/' ? 'underline' : ''}`}
          >
            Home
          </Link>
          {isLoggedIn ? (
            <>
              <button 
                onClick={onLogout} 
                className="text-white hover:underline transition duration-300 transform hover:scale-105"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className={`mr-4 hover:underline transition duration-300 ${location.pathname === '/login' ? 'underline' : ''}`}
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className={`hover:underline transition duration-300 ${location.pathname === '/register' ? 'underline' : ''}`}
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
