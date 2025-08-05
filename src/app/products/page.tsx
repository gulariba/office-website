
import ProductCard from "../components/ProductCard";
import { productData } from "../utils/productData";

export default function ProductsPage() {
  return (
    <section className="min-h-screen py-20 px-6 md:px-12 bg-[#fff8f2] text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-600">Explore Our Offices</h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover modern, secure, and affordable office spaces tailored to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
