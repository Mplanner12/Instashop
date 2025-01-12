import React from "react";
import Link from "next/link";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const products = [
  {
    id: 1,
    title: "Product 1",
    description: "Description for product 1",
    price: "$10",
    image: "/prod-img.png",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description for product 2",
    price: "$20",
    image: "/prod-img.png",
  },
];

const ProductList: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center bg-gray-50 min-h-screen px-4 sm:px-8">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6">
        {/* Header */}
        <div className="flex items-center justify-start gap-x-2 mt-[-0.25rem] mb-6">
          <Link href="/" className="text-gray-500 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </Link>
          <h1 className="text-lg font-semibold text-gray-800">Product List</h1>
        </div>

        {/* Product List */}
        <div className="space-y-4">
          {products.map((product) => (
            <Link
              href={`/edit-product-details`}
              key={product.id}
              className="flex items-center justify-between p-2 border border-gray-300 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-12 h-12 rounded-lg"
                />
                <div>
                  <h2 className="text-sm font-medium text-gray-700">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-sm text-gray-800 font-semibold">
                    {product.price}
                  </p>
                </div>
              </div>
              <button className="text-gray-500">
                <HiOutlineDotsHorizontal />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
