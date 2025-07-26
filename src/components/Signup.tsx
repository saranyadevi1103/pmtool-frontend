import React, { useState } from 'react';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save to localStorage for now (demo purpose)
    localStorage.setItem('userData', JSON.stringify(formData));

    alert('Signed up successfully ✨ You can now log in!');
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f4f2]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#e3e3e9] p-8 rounded-xl shadow-lg w-[340px] h-[430px] flex flex-col justify-center"
      >
        <h2 className="text-2xl font-bold text-center text-[#8458B3] mb-4">Create Account</h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-3 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-[#8458B3]"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-[#8458B3]"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-[#8458B3]"
        />

        <button
          type="submit"
          className="w-full bg-[#8458B3] text-white py-2 rounded hover:bg-[#6e479d] transition"
        >
          Sign Up
        </button>

        <p className="text-xs text-center text-gray-600 mt-4">
          Already registered?{' '}
          <a href="/login" className="text-[#8458B3] hover:underline">Log in</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;