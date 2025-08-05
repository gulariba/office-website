
export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export const productData: Product[] = [
  {
    id: 1,
    name: "Minimalist Suite",
    description: "A sleek space ideal for remote work and meetings.",
    price: "$450/mo",
    image: "/images/img1.jpg"
  },
  {
    id: 2,
    name: "Urban Co-Work",
    description: "Collaborative environment in the heart of the city.",
    price: "$320/mo",
    image: "/images/img2.jpg"
  },
  {
    id: 3,
    name: "Premium Private Cabin",
    description: "Privacy and professionalism combined for executives.",
    price: "$600/mo",
    image: "/images/img3.jpg"
  },
  {
    id: 4,
    name: "Startup Hub",
    description: "Affordable and flexible workspaces for startups.",
    price: "$250/mo",
    image: "/images/img4.jpg"
  },
  {
    id: 5,
    name: "Creative Loft",
    description: "Open-concept office with plenty of natural light.",
    price: "$375/mo",
    image: "/images/img5.jpg"
  },
  {
    id: 6,
    name: "Executive Corner",
    description: "High-end furnishings and panoramic city views.",
    price: "$720/mo",
    image: "/images/img6.jpg"
  },
  {
    id: 7,
    name: "Shared Open Space",
    description: "Flexible desks and a lively community atmosphere.",
    price: "$200/mo",
    image: "/images/img7.jpg"
  },
  {
    id: 8,
    name: "Boutique Office Pod",
    description: "Compact yet stylish office pods for individuals.",
    price: "$280/mo",
    image: "/images/img8.jpg"
  },
];