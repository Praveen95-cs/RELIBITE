import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import Footer from '../components/Footer';

export default function DeliveryTracker() {
  // Replace with real data fetching logic
  const deliveries = [];
  const loading = false; // Set to true while fetching

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar role="Volunteer" />
      <main className="flex-1 flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-3xl flex flex-col gap-6">
          <h2 className="text-2xl font-poppins font-bold text-deepgreen mb-2">Delivery Tracker</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {loading ? (
              Array.from({ length: 2 }).map((_, i) => (
                <Card key={i} className="flex flex-col gap-2 animate-pulse bg-gray-100 h-40" />
              ))
            ) : deliveries.length === 0 ? (
              <div className="col-span-2 text-center text-gray-500">No deliveries to display.</div>
            ) : (
              deliveries.map(delivery => (
                <Card key={delivery.id} className="flex flex-col gap-2">
                  <div className="font-poppins font-semibold text-deepgreen text-lg">{delivery.food}</div>
                  <div className="text-sm text-gray-700">To: {delivery.recipient}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <StatusBar status={delivery.status} />
                  </div>
                  <Button variant="primary" className="w-full mt-2">Mark as Completed</Button>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function StatusBar({ status }) {
  // status: 'Not Picked', 'Picked', 'Delivered'
  const steps = ['Not Picked', 'Picked', 'Delivered'];
  const current = steps.indexOf(status);
  return (
    <div className="flex gap-2 items-center w-full">
      {steps.map((step, i) => (
        <div key={step} className={`flex-1 h-2 rounded-full ${i <= current ? 'bg-accentgreen' : 'bg-gray-200'}`}></div>
      ))}
      <span className="ml-2 text-xs text-gray-600">{status}</span>
    </div>
  );
} 