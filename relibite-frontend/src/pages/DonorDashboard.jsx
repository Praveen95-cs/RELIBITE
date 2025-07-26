import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import StatusChip from '../components/StatusChip';
import Footer from '../components/Footer';

const donations = [
  { id: 1, food: 'Veg Biryani', quantity: '3 boxes', status: 'Accepted' },
  { id: 2, food: 'Bread Loaves', quantity: '10 pcs', status: 'Picked Up' },
  { id: 3, food: 'Fruit Salad', quantity: '5 bowls', status: 'Delivered' },
];

export default function DonorDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar role="Donor" />
      <main className="flex-1 flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-2xl flex flex-col gap-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-poppins font-bold text-deepgreen">My Donations</h2>
            <Button variant="primary" as="a" href="/donate">Donate Food</Button>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <table className="w-full text-left">
              <thead>
                <tr className="text-deepgreen font-poppins text-sm">
                  <th className="py-2">Food</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {donations.map(donation => (
                  <tr key={donation.id} className="border-t border-gray-100">
                    <td className="py-2">{donation.food}</td>
                    <td className="py-2">{donation.quantity}</td>
                    <td className="py-2"><StatusChip status={donation.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 