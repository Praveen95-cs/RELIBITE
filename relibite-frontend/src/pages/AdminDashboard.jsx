import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function AdminDashboard() {
  // Replace with real data fetching logic
  const stats = [];
  const complaints = [];
  const loading = false; // Set to true while fetching

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar role="Admin" />
      <main className="flex-1 flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-4xl flex flex-col gap-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <Card key={i} className="flex flex-col items-center py-6 animate-pulse bg-gray-100">
                  <div className="h-6 w-12 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </Card>
              ))
            ) : stats.length === 0 ? (
              <div className="col-span-4 text-center text-gray-500">No stats to display.</div>
            ) : (
              stats.map(stat => (
                <Card key={stat.label} className="flex flex-col items-center py-6">
                  <div className="text-2xl font-bold text-deepgreen font-poppins">{stat.value}</div>
                  <div className="text-sm text-gray-700 mt-1">{stat.label}</div>
                </Card>
              ))
            )}
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <h3 className="text-lg font-poppins font-semibold text-deepgreen mb-2">Complaints</h3>
            {loading ? (
              <div className="h-8 w-full bg-gray-100 animate-pulse rounded mb-2"></div>
            ) : complaints.length === 0 ? (
              <div className="text-gray-500">No complaints to display.</div>
            ) : (
              <table className="w-full text-left">
                <thead>
                  <tr className="text-deepgreen font-poppins text-sm">
                    <th className="py-2">Item</th>
                    <th className="py-2">Message</th>
                    <th className="py-2">Flagged</th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.map(c => (
                    <tr key={c.id} className="border-t border-gray-100">
                      <td className="py-2">{c.item}</td>
                      <td className="py-2">{c.message}</td>
                      <td className="py-2">{c.flagged ? '🚩' : ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 