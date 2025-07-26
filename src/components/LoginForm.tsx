// src/components/LoginForm.tsx
import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem('userData') || '{}');

    if (
      loginData.email === savedUser.email &&
      loginData.password === savedUser.password
    ) {
      alert(`Login successful! Welcome back, ${savedUser.name} 💫`);
      window.location.href = '/dashboard'; // Or any page you want
    } else {
      alert('Invalid credentials ❌ Please try again');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f4f0]">
      <form
        onSubmit={handleLogin}
        className="bg-[#dcdcdc] p-8 rounded-xl shadow-md w-[340px] h-[420px] flex flex-col justify-center"
      >
        <h2 className="text-2xl font-bold text-center text-[#4057a1] mb-6">
          Welcome Back
        </h2>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-[#4057a1]"
        />
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-[#4057a1]"
        />
        <button
          type="submit"
          className="w-full bg-[#4057a1] text-white py-2 rounded hover:bg-[#2e478a] transition"
        >
          Login
        </button>
        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{' '}
          <a href="/signup" className="text-[#4057a1] hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;