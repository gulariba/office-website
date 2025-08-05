// app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-orange-100 text-gray-800 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-orange-600">Best Bonanza</h3>
          <p className="mt-3 text-sm">
            Stylish & secure office spaces tailored for modern professionals. Discover your ideal workspace with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/products">Our Offices</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-sm">Email: info@bestbonanza.com</p>
          <p className="text-sm mt-1">Phone: +92 300 1234567</p>
          <p className="text-sm mt-1">Location: Lahore, Pakistan</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-5 text-2xl text-orange-600">
            <a href="#" aria-label="Instagram" className="hover:text-orange-800 transition">📷</a>
            <a href="#" aria-label="Facebook" className="hover:text-orange-800 transition">📘</a>
            <a href="#" aria-label="Twitter" className="hover:text-orange-800 transition">🐦</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-orange-800 transition">💼</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t pt-6">
        &copy; {new Date().getFullYear()} Best Bonanza. All rights reserved.
      </div>
    </footer>
  );
}
