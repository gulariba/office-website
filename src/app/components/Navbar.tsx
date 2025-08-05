"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // You can install Lucide or use SVG icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-orange-500 text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-2xl font-bold tracking-wide">Best Bonanza</h1>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/products" className="hover:underline">Offices</Link></li>
          <li><Link href="/terms" className="hover:underline">Terms</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-sm font-medium bg-orange-400 rounded-lg p-4">
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/products" onClick={toggleMenu}>Offices</Link></li>
            <li><Link href="/terms" onClick={toggleMenu}>Terms</Link></li>
            <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
