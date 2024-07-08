import React from "react";
import { useWishlist } from "../context/wishlist-context";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart-context.jsx";

import Footer from "./Footer.jsx";

function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const handleAddToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  return (
    <>
      <div className="wishlist-container p-8">
        <h1 className="text-4xl font-bold mb-8">Your Wishlist</h1>
        {wishlistItems.length === 0 ? (
          <p className="text-xl">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="wishlist-item border p-4 rounded shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
                <p className="text-lg mb-4">${item.price}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-white text-B88E2F px-4 py-2 w-15 mb-2 rounded-md border border-B88E2F"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-600 hover:text-red-800 flex items-center gap-2"
                >
                  <FaTrashAlt /> Remove
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center mt-8">
          <Link to="/shop" className="text-black-600 hover:text-gray-900">
            <button className="bg-white text-B88E2F px-4 py-2 w-[245px] rounded-md border border-B88E2F">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Wishlist;
