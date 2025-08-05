// app/components/ProductCard.tsx

import Image from "next/image";
import Link from "next/link";
import { Product } from "../utils/productData";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.id}`} passHref>
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden cursor-pointer">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-60 object-cover"
        />
        <div className="p-5">
          <h3 className="text-xl font-semibold text-orange-700">{product.name}</h3>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-orange-600 font-bold mt-4">{product.price}</p>
        </div>
      </div>
    </Link>
  );
}
