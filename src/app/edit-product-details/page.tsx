/* eslint-disable @next/next/no-img-element */
"use client";
import Loader from "@/utils/Loader";
import Link from "next/link";
import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdArrowBack } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { LuImagePlus } from "react-icons/lu";

const Page: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [selfShipping, setSelfShipping] = useState(false);
  const [instashopShipping, setInstashopShipping] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [productCollection, setProductCollection] = useState("");
  const [inventoryStocks, setInventoryStocks] = useState("");
  const [inputErrors, setInputErrors] = useState({
    productTitle: "",
    productDescription: "",
    price: "",
    oldPrice: "",
    productCollection: "",
    inventoryStocks: "",
  });

  const [toggles, setToggles] = useState([false, false, false, false]);

  const handleToggle = (index: number) => {
    console.log("Toggle clicked for index:", index);
    const newToggles = [...toggles];
    newToggles[index] = !newToggles[index];
    setToggles(newToggles);
    console.log("New state:", newToggles);
  };

  const handleSubmit = () => {
    const errors = {
      productTitle: "",
      productDescription: "",
      price: "",
      oldPrice: "",
      productCollection: "",
      inventoryStocks: "",
    };

    if (!productTitle) errors.productTitle = "Product title is required.";
    if (!productDescription)
      errors.productDescription = "Product description is required.";
    if (!price) errors.price = "Price is required.";
    if (!oldPrice) errors.oldPrice = "Old price is required.";
    if (!productCollection)
      errors.productCollection = "Product collection is required.";
    if (!inventoryStocks)
      errors.inventoryStocks = "Inventory stocks are required.";

    setInputErrors(errors);

    if (Object.values(errors).some((error) => error)) {
      return;
    }
    if (!selfShipping && !instashopShipping) {
      setErrorMessage("Please select at least one shipping option.");
      return;
    }

    setLoading(true);

    localStorage.setItem(
      "shippingOptions",
      JSON.stringify({ selfShipping, instashopShipping })
    );
    setErrorMessage("");

    setTimeout(() => {
      setLoading(false);
      window.location.href = "/product-preview";
    }, 2000);
  };
  return (
    <div className="flex justify-center items-center bg-gray-50 min-h-screen px-4 sm:px-8">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
        {/* Header */}
        <div className="w-full flex justify-between items-center mt-[-0.25rem] mb-6">
          <div className="flex items-center justify-start gap-x-2">
            <Link href="/" className="text-gray-500 hover:text-black">
              <IoMdArrowBack size={24} />
            </Link>
            <h1 className="text-lg font-semibold text-gray-800">
              Product details
            </h1>
          </div>
          <div>
            <BiDotsVerticalRounded size={24} />
          </div>
        </div>

        {/* Status */}
        <div className="w-full mb-6 flex justify-between items-center">
          <div className="">
            <div className="w-full rounded-2xl border text-gray-500 border-gray-300 flex justify-start items-center gap-x-1.5 p-1.5">
              <p>Draft</p>
              <p>
                <IoCheckmark />
              </p>
            </div>
          </div>
          <button className="text-[#8A226F] text-[0.925rem] font-medium hover:underline">
            Preview product
          </button>
        </div>
        {/* Basic Details */}
        <div className="mb-6">
          <h2 className="font-semibold text-black">Basic details</h2>
          <div className="mt-4 space-y-2.5">
            <input
              type="text"
              placeholder="Product Title"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-[#8A226F] focus:border-[#8A226F]"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
            />
            {inputErrors.productTitle && (
              <div className="text-red-500 text-sm mt-1">
                {inputErrors.productTitle}
              </div>
            )}
            <textarea
              placeholder="Product description"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-[#8A226F] focus:border-[#8A226F]"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
            {inputErrors.productDescription && (
              <div className="text-red-500 text-sm mt-1">
                {inputErrors.productDescription}
              </div>
            )}
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Price"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-[#8A226F] focus:border-[#8A226F]"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              {inputErrors.price && (
                <div className="text-red-500 text-sm mt-1">
                  {inputErrors.price}
                </div>
              )}
              <input
                type="text"
                placeholder="Old price"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-[#8A226F] focus:border-[#8A226F]"
                value={oldPrice}
                onChange={(e) => setOldPrice(e.target.value)}
              />
              {inputErrors.oldPrice && (
                <div className="text-red-500 text-sm mt-1">
                  {inputErrors.oldPrice}
                </div>
              )}
            </div>
            <input
              type="text"
              placeholder="Product collection"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-[#8A226F] focus:border-[#8A226F]"
              value={productCollection}
              onChange={(e) => setProductCollection(e.target.value)}
            />
            {inputErrors.productCollection && (
              <div className="text-red-500 text-sm mt-1">
                {inputErrors.productCollection}
              </div>
            )}
            <input
              type="number"
              placeholder="Inventory stocks"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-[#8A226F] focus:border-[#8A226F]"
              value={inventoryStocks}
              onChange={(e) => setInventoryStocks(e.target.value)}
            />
            {inputErrors.inventoryStocks && (
              <div className="text-red-500 text-sm mt-1">
                {inputErrors.inventoryStocks}
              </div>
            )}
          </div>
        </div>

        {/* Product Images */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-gray-700">Product images</h2>
          <div className="mt-4 space-y-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 border border-gray-300 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src="/prod-img.png"
                    alt="Product"
                    className="w-12 h-12 rounded-lg"
                  />
                  <span>logo.Img</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-gray-500">
                    <HiOutlineDotsHorizontal />
                  </button>
                  <label
                    className={`toggle-switch ${
                      toggles[index] ? "toggle-on" : "toggle-off"
                    }`}
                    onClick={() => handleToggle(index)} // Use onClick here to handle the toggle
                  >
                    <input
                      type="checkbox"
                      checked={toggles[index]}
                      readOnly // Disable onChange to prevent double toggle
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 w-full flex justify-center items-center bg-gray-100 rounded-full py-3 px-4 text-center">
            <button className="text-[#8A226F] font-medium flex items-center justify-center gap-2">
              Add image{" "}
              <span>
                <LuImagePlus size={22} />
              </span>
            </button>
          </div>
        </div>

        {/* Inventory Variations */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-gray-700">
            Inventory variations
          </h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="variations"
                className="checkbox-custom"
                defaultChecked
              />
              <label htmlFor="variations" className="text-sm text-gray-600">
                This product is variable; has different colors, sizes, weight,
                materials, etc.
              </label>
            </div>
            <div className="space-y-4">
              {["Color", "Size", "Material"].map((option, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-300 rounded-lg"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium text-gray-700">
                      Option {index + 1} - {option}
                    </h3>
                    <button className="text-gray-500">...</button>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-200 text-sm rounded-lg">
                      Red
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-sm rounded-lg">
                      White
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-sm rounded-lg">
                      Black
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter values"
                    className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-[#8A226F] focus:border-[#8A226F]"
                  />
                </div>
              ))}
              <button className="mt-4 w-full p-2 border border-dashed border-gray-300 rounded-lg text-[#8A226F] font-medium">
                + Add new option
              </button>
            </div>
          </div>
        </div>

        {/* Shipping */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-black">Shipping</h2>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between flex-row-reverse w-full items-center gap-2">
              <input
                type="checkbox"
                id="self-shipping"
                className="checkbox-custom"
                checked={selfShipping}
                onChange={(e) => setSelfShipping(e.target.checked)}
              />
              <label
                htmlFor="self-shipping"
                className="text-sm text-[#000000E5]"
              >
                Self shipping
              </label>
            </div>
            <div className="flex justify-between flex-row-reverse w-full items-center gap-2">
              <input
                type="checkbox"
                id="instashop-shipping"
                className="checkbox-custom"
                checked={instashopShipping}
                onChange={(e) => setInstashopShipping(e.target.checked)}
              />
              <label
                htmlFor="instashop-shipping"
                className="text-sm text-[#000000E5]"
              >
                InstaShop shipping
              </label>
            </div>
            {errorMessage && (
              <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4">
          <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="w-full bg-[#8A226F] text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
            {loading ? <Loader /> : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
