import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-deepgreen text-cream py-6 px-4 mt-8 rounded-t-2xl">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-lg font-poppins font-semibold">Relibite</div>
        <div className="flex gap-6 text-sm">
          <a href="/about" className="hover:underline focus:underline">About</a>
          <a href="/privacy" className="hover:underline focus:underline">Privacy Policy</a>
          <a href="mailto:contact@relibite.org" className="hover:underline focus:underline">Contact</a>
        </div>
        <div className="text-xs text-cream/70">&copy; {new Date().getFullYear()} Relibite. All rights reserved.</div>
      </div>
    </footer>
  );
} 