export default function AboutPage() {
  return (
    <main className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/aboutbg.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      {/* Content */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-gray-800">
        <h1 className="text-5xl font-extrabold text-orange-600 mb-6 tracking-tight">
          About Best Bonanza
        </h1>

        <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
          At Best Bonanza, we’re redefining what office spaces mean for the modern generation.
          Our goal is simple — offer stylish, secure, and affordable workspaces designed for
          millennials ready to build, grow, and succeed.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-orange-500 mb-3">Our Mission</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              To empower emerging entrepreneurs and professionals by providing spaces that reflect
              their energy, ambition, and creativity. We’re here to help you do your best work in
              environments built for inspiration.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-orange-500 mb-3">Our Vision</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              To become the go-to brand for modern office solutions — creating vibrant communities
              of thinkers, doers, and dreamers across the country.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
