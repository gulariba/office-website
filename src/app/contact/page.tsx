"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (e.g. API call)
    alert("Message sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 md:px-12 py-20">
      <h1 className="text-4xl font-bold text-center mb-4 text-orange-600">Contact Us</h1>
      <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
        We'd love to hear from you! Please fill out the form below or reach us directly via email or phone.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-50 p-8 shadow-lg rounded-xl"
        >
          <div>
            <label className="block mb-2 text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-gray-100 p-8 shadow-lg rounded-xl space-y-6">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Get in Touch</h2>
          <p className="text-gray-700">Reach out to us using the following contact details:</p>
          <div>
            <h3 className="font-semibold">Email:</h3>
            <p className="text-gray-600">support@bestbonanza.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Phone:</h3>
            <p className="text-gray-600">+92 300 1234567</p>
          </div>
          <div>
            <h3 className="font-semibold">Address:</h3>
            <p className="text-gray-600">
              123 Bonanza Street, Millennial Plaza,<br />Karachi, Pakistan
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
