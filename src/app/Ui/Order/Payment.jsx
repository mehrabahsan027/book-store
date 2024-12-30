'use client'



import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Payment() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cvv: "",
  });

  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data Submitted:", formData);
    router.push('/store/track-order')
  };

  return (
    <div className="flex justify-center my-10">
     
      <form className="w-10/12 md:w-1/2" onSubmit={handleSubmit}>
      <h2 className='text-2xl text-center mb-5 underline underline-offset-4'> Make Payment</h2>
        <div className="mb-4">
          <label
            htmlFor="card-number"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Card Number
          </label>
          <input
            type="number"
            id="card-number"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="card-name"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Name on the Card
          </label>
          <input
            type="text"
            id="card-name"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="card-expiry"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Card Expiry
          </label>
          <input
            type="date"
            id="card-expiry"
            name="cardExpiry"
            value={formData.cardExpiry}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cvv"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            CVV/Pin
          </label>
          <input
            type="password"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="123"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Make Payment
        </button>
      </form>
    </div>
  );
}
