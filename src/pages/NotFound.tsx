// src/pages/NotFound.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-6">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-center max-w-md mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
