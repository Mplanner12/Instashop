/* eslint-disable @next/next/no-img-element */
import Loader from "@/utils/Loader";
import Link from "next/link";
import React, { useState } from "react";

const StoreForm = () => {
  const [loading, setLoading] = useState(false);
  const [storeName, setStoreName] = useState("");
  const [storeTagName, setStoreTagName] = useState("");
  const [storePhoneNumber, setStorePhoneNumber] = useState("");
  const [storeEmail, setStoreEmail] = useState("");
  const [category, setCategory] = useState("");
  const [logo, setLogo] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (
      !storeName ||
      !storeTagName ||
      !storePhoneNumber ||
      !storeEmail ||
      !category
    ) {
      setErrorMessage("All fields are required.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem(
        "storeFormData",
        JSON.stringify({
          storeName,
          storeTagName,
          storePhoneNumber,
          storeEmail,
          category,
        })
      );
      setLoading(false);
      window.location.href = "/create-product";
    }, 500);
    // Storing values in local storage
  };

  return (
    <div className="flex items-center justify-center h-screen px-4 bg-white">
      <div className="w-full h-full max-w-md mt-[4.5rem]">
        {/* Form Section */}
        <div className="mt-8">
          <div className="flex flex-col items-center px-[3rem] py-[2rem] border border-[#00000033] rounded-2xl">
            <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
              {logo ? (
                <img
                  src={URL.createObjectURL(logo)}
                  alt="Store logo"
                  className="object-cover w-full h-full"
                />
              ) : (
                <img
                  src="/store-img.png"
                  alt="Upload store logo"
                  className="object-cover w-full h-full"
                />
              )}
            </div>
            <label className="mt-2 text-sm font-medium text-[#8A226F] cursor-pointer">
              Upload store logo
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleLogoChange}
              />
            </label>
          </div>

          {/* Input Fields */}
          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Store name"
              className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-[#00000033] rounded-xl focus:ring-2 focus:ring-[#8A226F] focus:outline-none"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Store tag name"
              className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-[#00000033] rounded-xl focus:ring-2 focus:ring-[#8A226F] focus:outline-none"
              value={storeTagName}
              onChange={(e) => setStoreTagName(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Store phone number"
              className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-[#00000033] rounded-xl focus:ring-2 focus:ring-[#8A226F] focus:outline-none"
              value={storePhoneNumber}
              onChange={(e) => setStorePhoneNumber(e.target.value)}
            />
            <input
              type="email"
              placeholder="Store email"
              className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-[#00000033] rounded-xl focus:ring-2 focus:ring-[#8A226F] focus:outline-none"
              value={storeEmail}
              onChange={(e) => setStoreEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Category"
              className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-[#00000033] rounded-xl focus:ring-2 focus:ring-[#8A226F] focus:outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          {errorMessage && (
            <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
          )}

          <div className="relative top-[11rem] w-full h-full flex justify-center items-center">
            <Link
              href={"/create-product"}
              className="w-full px-4 py-3 mt-8 text-white text-center bg-[#8A226F] rounded-full hover:bg-purple-700 focus:ring-2 focus:ring-[#8A226F] focus:outline-none"
              type="button"
              onClick={handleSubmit}
            >
              {loading ? <Loader /> : "Continue"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreForm;
