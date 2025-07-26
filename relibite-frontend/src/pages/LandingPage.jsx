import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import BenefitCard from '../components/BenefitCard';
import Footer from '../components/Footer';
import { Heart, Users, Leaf } from '@heroicons/react/24/outline';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="flex flex-col items-center gap-2 mb-8 mt-8">
          <div className="bg-orange/10 rounded-full p-4 mb-2">
            <span className="text-5xl" role="img" aria-label="bowl with heart">🍲</span>
          </div>
          <h1 className="text-4xl font-poppins font-bold text-deepgreen mb-2">Relibite</h1>
          <p className="text-lg text-deepgreen font-medium mb-4">A bite of relief, a plate of hope</p>
          <div className="flex gap-4 mb-6">
            <Button variant="primary" as="a" href="/register">Sign Up</Button>
            <Button variant="secondary" as="a" href="/login">Login</Button>
          </div>
        </div>
        <section className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <BenefitCard icon={Leaf} title="Save Food" description="Prevent food waste by sharing surplus meals." />
          <BenefitCard icon={Heart} title="Feed People" description="Help those in need get access to fresh food." />
          <BenefitCard icon={Users} title="Build Community" description="Connect with neighbors and volunteers." />
        </section>
      </main>
      <Footer />
    </div>
  );
} 