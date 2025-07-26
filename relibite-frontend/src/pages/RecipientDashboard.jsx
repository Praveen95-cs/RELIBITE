import React from 'react';
import Navbar from '../components/Navbar';
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';

export default function RecipientDashboard() {
  // Replace with real data fetching logic
  const foodItems = [];
  const loading = false; // Set to true while fetching

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar role="Recipient" />
      <main className="flex-1 flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-4xl flex flex-col gap-6">
          <h2 className="text-2xl font-poppins font-bold text-deepgreen mb-2">Available Food</h2>
          {/* Filters can be added here when real data is available */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-gray-100 rounded-2xl h-56 animate-pulse"></div>
              ))
            ) : foodItems.length === 0 ? (
              <div className="col-span-3 text-center text-gray-500">No food items available.</div>
            ) : (
              foodItems.map(item => (
                <FoodCard key={item.id} {...item} />
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 