"use client";

import Image from "next/image";
import ContactSection from "./components/ContactForm";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <section className="space-y-24 py-16 px-6 md:px-12 text-gray-800 bg-white">

      {/* Hero Section */}
      <div className="relative text-center max-w-7xl mx-auto h-[500px] flex items-center justify-center rounded-3xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <Image
          src="/images/bg4.jpg" // make sure this image exists in public/images/
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30 z-0"
          priority
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />

        {/* Text Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-orange-600 leading-tight drop-shadow-md">
            Secure & Stylish Office Spaces
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white drop-shadow">
            Designed for modern professionals and millennials. Find the perfect workspace with Best Bonanza.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block bg-orange-500 text-white font-medium text-lg px-8 py-4 rounded-full shadow-lg hover:bg-orange-600 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            title: "Modern Spaces",
            text: "Designed with millennials in mind, our offices combine functionality with aesthetics.",
          },
          {
            title: "Affordable Pricing",
            text: "Get premium spaces at unbeatable prices, with flexible packages to suit your needs.",
          },
          {
            title: "Secure Locations",
            text: "Our offices offer peace of mind with top-level security in prime business zones.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-orange-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-orange-700 mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.text}</p>
          </div>
        ))}
      </div>

      {/* Office Gallery Section */}
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-600 mb-8">Office Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Image
              src="/images/pic2.jpg"
              alt="Open Work Space"
              width={400}
              height={300}
              className="rounded-xl object-cover w-full h-64 shadow-md"
            />
            <p className="mt-2 text-gray-600 text-sm">Open Work Space</p>
          </div>

          <div>
            <Image
              src="/images/pic1.jpg"
              alt="Modern Meeting Room"
              width={400}
              height={300}
              className="rounded-xl object-cover w-full h-64 shadow-md"
            />
            <p className="mt-2 text-gray-600 text-sm">Modern Meeting Room</p>
          </div>

          <div>
            <Image
              src="/images/pic3.jpg"
              alt="Private Executive Cabin"
              width={400}
              height={300}
              className="rounded-xl object-cover w-full h-64 shadow-md"
            />
            <p className="mt-2 text-gray-600 text-sm">Private Executive Cabin</p>
          </div>
        </div>
      </div>

      <CTA />

      {/* Contact Us Section */}
      <div id="contact">
        <ContactSection />
      </div>
    </section>
  );
}
