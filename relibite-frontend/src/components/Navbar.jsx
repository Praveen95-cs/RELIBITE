import React, { useState } from 'react';
import { Menu, X, UserCircle } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Donate', href: '/donate' },
  { name: 'Find Food', href: '/find-food' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Profile', href: '/profile' },
  { name: 'Logout', href: '/logout' },
];

export default function Navbar({ role = 'Donor' }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-cream border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-poppins font-bold text-deepgreen">🍲 Relibite</span>
      </div>
      <div className="hidden md:flex gap-4 items-center">
        {navLinks.map(link => (
          <Link key={link.name} to={link.href} className="text-deepgreen font-medium hover:text-orange transition">
            {link.name}
          </Link>
        ))}
        <div className="relative group">
          <button className="flex items-center gap-1 px-2 py-1 rounded hover:bg-accentgreen/20">
            <UserCircle className="w-6 h-6 text-deepgreen" />
            <span className="text-sm font-poppins">{role}</span>
          </button>
          <div className="absolute right-0 mt-2 w-40 bg-cream rounded-xl shadow-lg p-2 hidden group-hover:block z-20">
            <Link to="/settings" className="block px-3 py-2 text-deepgreen hover:bg-accentgreen/10 rounded">Settings</Link>
            <Link to="/logout" className="block px-3 py-2 text-orange hover:bg-orange/10 rounded">Logout</Link>
          </div>
        </div>
      </div>
      <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X className="w-7 h-7 text-deepgreen" /> : <Menu className="w-7 h-7 text-deepgreen" />}
      </button>
      {open && (
        <div className="absolute top-14 left-0 w-full bg-cream shadow-md flex flex-col gap-2 p-4 md:hidden z-30 animate-fade-in">
          {navLinks.map(link => (
            <Link key={link.name} to={link.href} className="text-deepgreen font-medium py-2 border-b border-gray-100 hover:text-orange transition" onClick={() => setOpen(false)}>
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-2 mt-2">
            <UserCircle className="w-6 h-6 text-deepgreen" />
            <span className="text-sm font-poppins">{role}</span>
          </div>
        </div>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  role: PropTypes.string,
}; 