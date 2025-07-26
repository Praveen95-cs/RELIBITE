import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';

export default function MapView() {
  const [locationEnabled, setLocationEnabled] = useState(false);
  // Replace with real data fetching logic
  const foodPins = [];
  const loading = false; // Set to true while fetching
  const [selectedPin, setSelectedPin] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1 flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-3xl flex flex-col gap-6">
          <h2 className="text-2xl font-poppins font-bold text-deepgreen mb-2">Neighbour Connect</h2>
          <div className="flex items-center gap-3 mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={locationEnabled}
                onChange={() => setLocationEnabled(l => !l)}
                className="accent-orange w-5 h-5"
              />
              <span className="font-medium text-deepgreen">Enable Location</span>
            </label>
          </div>
          <div className="w-full h-80 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 relative">
            {/* Map placeholder, ready for Leaflet/Google Maps integration */}
            <span>Map Placeholder</span>
            {/* Example: Pin click popup (shown only if selectedPin is set) */}
            {selectedPin && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-4 z-10 w-64">
                <div className="font-poppins font-semibold text-deepgreen mb-1">{selectedPin.title}</div>
                <div className="text-sm text-gray-700 mb-1">By {selectedPin.donor}</div>
                <div className="text-xs text-gray-500 mb-2">{selectedPin.distance} away</div>
                <Button variant="primary" className="w-full">Connect with Donor</Button>
                <button className="absolute top-2 right-2 text-gray-400 hover:text-orange" onClick={() => setSelectedPin(null)} aria-label="Close">×</button>
              </div>
            )}
          </div>
          <div className="mt-2">
            {loading ? (
              <div className="text-gray-500">Loading food pins...</div>
            ) : foodPins.length === 0 ? (
              <div className="text-gray-500">No food items found near you.</div>
            ) : null}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 