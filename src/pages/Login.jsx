// src/pages/Login.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const existingUser = localStorage.getItem(username);

    if (existingUser && existingUser === password) {
      setIsLoggedIn(true); // Set login state
      navigate('/dashboard'); // Navigate to Dashboard after successful login
    } else {
      alert('No account found. Please register.');
      navigate('/register'); // Navigate to Register if no account found
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-300 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-lg transition duration-300"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-lg transition duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600 transform hover:scale-105 hover:shadow-lg"
          >
            Login
          </button>
        </form>
        <p className="mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500 hover:underline transition duration-300">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
