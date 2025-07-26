// src/pages/TestTailwind.tsx ✅
import React from "react";

const TestTailwind: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-yellow-200 text-center p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">
          ✅ Tailwind is working perfectly, Saranya 🎉
        </h1>
      </div>
    </div>
  );
};

export default TestTailwind;
