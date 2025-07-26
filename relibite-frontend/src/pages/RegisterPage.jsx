import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const roles = ['Donor', 'Recipient', 'Volunteer'];

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: 'Donor', location: '' });
  const [error, setError] = useState({});
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleRoleChange = e => {
    setForm({ ...form, role: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    // Add validation and register logic here
  };
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md flex flex-col gap-4">
          <h2 className="text-2xl font-poppins font-bold text-deepgreen mb-2">Register</h2>
          <FormInput label="Name" id="name" name="name" value={form.name} onChange={handleChange} error={error.name} autoComplete="name" required />
          <FormInput label="Email" id="email" name="email" type="email" value={form.email} onChange={handleChange} error={error.email} autoComplete="email" required />
          <FormInput label="Phone" id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} error={error.phone} autoComplete="tel" required />
          <div>
            <div className="block mb-1 font-medium text-deepgreen font-poppins">Role</div>
            <div className="flex gap-4">
              {roles.map(role => (
                <label key={role} className="inline-flex items-center gap-1">
                  <input type="radio" name="role" value={role} checked={form.role === role} onChange={handleRoleChange} className="accent-orange" />
                  <span>{role}</span>
                </label>
              ))}
            </div>
          </div>
          <FormInput label="Location (optional)" id="location" name="location" value={form.location} onChange={handleChange} error={error.location} autoComplete="off" />
          <Button type="submit" variant="primary" className="w-full">Register</Button>
          <div className="text-sm text-center mt-2">
            Already have an account? <Link to="/login" className="text-orange hover:underline">Login</Link>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
} 