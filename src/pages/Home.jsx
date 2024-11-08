// src/pages/Home.jsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-md">Welcome to Dietify</h1>
        <p className="mb-4 text-xl text-white drop-shadow-md">Personalized Diet Solutions for Busy Lives</p>
        <div className="space-x-4">
          <Link to="/login" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md transition duration-300 transform hover:scale-105">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
