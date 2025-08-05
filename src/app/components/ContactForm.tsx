// app/components/ContactSection.tsx

"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent! We'll get back to you soon.");
    // You can connect this to an API later.
  };

  return (
    <section className="bg-orange-50 py-16 px-6 text-center" id="contact">
      <h2 className="text-3xl font-bold text-orange-600 mb-6">Contact Us</h2>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Have questions or want to book a space? Fill out the form and our team will reach out.
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-orange-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-orange-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border border-orange-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-orange-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
