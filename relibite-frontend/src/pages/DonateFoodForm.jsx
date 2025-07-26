import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import Footer from '../components/Footer';

export default function DonateFoodForm() {
  const [form, setForm] = useState({
    foodName: '',
    quantity: '',
    expiry: '',
    location: '',
    image: null,
  });
  const [error, setError] = useState({});

  const handleChange = e => {
    const { name, value, files } = e.target;
    setForm(f => ({
      ...f,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Add validation and submit logic here
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar role="Donor" />
      <main className="flex-1 flex flex-col items-center px-4 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8 w-full max-w-lg flex flex-col gap-4">
          <h2 className="text-2xl font-poppins font-bold text-deepgreen mb-2">Donate Food</h2>
          <FormInput label="Food Name" id="foodName" name="foodName" value={form.foodName} onChange={handleChange} error={error.foodName} required />
          <FormInput label="Quantity" id="quantity" name="quantity" value={form.quantity} onChange={handleChange} error={error.quantity} required />
          <FormInput label="Expiry Time" id="expiry" name="expiry" type="datetime-local" value={form.expiry} onChange={handleChange} error={error.expiry} required />
          <div>
            <label className="block mb-1 font-medium text-deepgreen font-poppins">Map Location (Coming Soon)</label>
            <div className="w-full h-32 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">Map Placeholder</div>
          </div>
          <div>
            <label htmlFor="image" className="block mb-1 font-medium text-deepgreen font-poppins">Image Upload</label>
            <input id="image" name="image" type="file" accept="image/*" onChange={handleChange} className="block w-full text-sm" />
          </div>
          <Button type="submit" variant="primary" className="w-full mt-2">List Food</Button>
        </form>
      </main>
      <Footer />
    </div>
  );
} 