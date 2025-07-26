// src/pages/Home.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Project Management Tool</h1>
      <p className="text-lg mb-6">Manage your projects, tasks, and team collaboration efficiently.</p>

      <div className="flex space-x-4">
        <Link to="/login">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
