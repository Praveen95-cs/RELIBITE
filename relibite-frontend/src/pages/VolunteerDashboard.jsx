import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import Footer from '../components/Footer';

export default function VolunteerDashboard() {
  // Replace with real data fetching logic
  const pickups = [];
  const loading = false; // Set to true while fetching

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar role="Volunteer" />
      <main className="flex-1 flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-3xl flex flex-col gap-6">
          <h2 className="text-2xl font-poppins font-bold text-deepgreen mb-2">Active Pickups</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {loading ? (
              Array.from({ length: 2 }).map((_, i) => (
                <Card key={i} className="flex flex-col gap-2 animate-pulse bg-gray-100">
                  <div className="h-6 w-32 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded mb-1"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded mb-1"></div>
                  <div className="h-8 w-full bg-gray-200 rounded"></div>
                </Card>
              ))
            ) : pickups.length === 0 ? (
              <div className="col-span-2 text-center text-gray-500">No pickups to display.</div>
            ) : (
              pickups.map(pickup => (
                <Card key={pickup.id} className="flex flex-col gap-2">
                  <div className="font-poppins font-semibold text-deepgreen text-lg">{pickup.food}</div>
                  <div className="text-sm text-gray-700">From: {pickup.donor}</div>
                  <div className="text-sm text-gray-700">Distance: {pickup.location}</div>
                  <Button variant="primary" className="w-full mt-2">Accept Task</Button>
                </Card>
              ))
            )}
          </div>
          <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center">
            <div className="font-poppins font-semibold text-deepgreen mb-2">Map View (Coming Soon)</div>
            <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">Map Placeholder</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 