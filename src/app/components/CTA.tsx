// app/components/CTA.tsx
export default function CTA() {
  return (
    <section className="bg-orange-100 text-center py-16 px-6 rounded-3xl shadow-xl mx-auto max-w-5xl my-20">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-4">
        Ready to Elevate Your Workspace?
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
        Explore secure, modern, and stylish office solutions designed for tomorrow&apos;s professionals. Let&rsquo;s create your perfect work environment today.
      </p>
      <a
        href="/contact"
        className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition"
      >
        Book a Free Consultation
      </a>
    </section>
  );
}
