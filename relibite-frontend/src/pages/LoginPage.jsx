import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState({});
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    // Add validation and login logic here
  };
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md flex flex-col gap-4">
          <h2 className="text-2xl font-poppins font-bold text-deepgreen mb-2">Login</h2>
          <FormInput label="Email" id="email" name="email" type="email" value={form.email} onChange={handleChange} error={error.email} autoComplete="email" required />
          <FormInput label="Password" id="password" name="password" type="password" value={form.password} onChange={handleChange} error={error.password} autoComplete="current-password" required />
          <Button type="submit" variant="primary" className="w-full">Login</Button>
          <div className="text-sm text-center mt-2">
            Don&apos;t have an account? <Link to="/register" className="text-orange hover:underline">Sign Up</Link>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
} 