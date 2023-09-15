import React from "react";
import { Link } from "react-router-dom";

export const ThankYouPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Thank You for Your Order!
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Your order has been successfully placed.
        </p>
        <div className="text-center">
          <Link
            to="/"
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};
