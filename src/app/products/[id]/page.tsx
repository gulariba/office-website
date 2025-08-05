// app/product/[id]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { productData } from "@/app/utils/productData";

type Props = {
  params: {
    id: string;
  };
};

export default function ProductDetailPage({ params }: Props) {
  const product = productData.find((p) => p.id === Number(params.id));

  if (!product) return notFound();

  return (
    <section className="min-h-screen px-6 md:px-12 py-20 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={400}
          className="rounded-xl object-cover w-full"
        />
        <div>
          <h1 className="text-4xl font-bold text-orange-600">{product.name}</h1>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <p className="text-2xl font-semibold text-orange-500 mt-6">{product.price}</p>
          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
            Book Now
          </button>
          <Link href="/products">
            <p className="mt-4 text-sm text-gray-500 underline">← Back to Offices</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
