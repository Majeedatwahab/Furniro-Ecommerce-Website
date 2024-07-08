// src/components/CartSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

const CartSidebar = ({
  isOpen,
  toggleSidebar,
  cartItems,
  removeFromCart,
  clearCart,
  getCartTotal,
}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      <div className="p-4">
        <button onClick={toggleSidebar} className="text-xl font-semibold">
          <IoIosCloseCircleOutline size="24" />
        </button>
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>
                    {item.quantity} x ${item.price.toFixed(2)}
                  </p>
                </div>
                <button onClick={() => removeFromCart(item)} className="">
                  <IoIosCloseCircleOutline size="24" />
                </button>
              </div>
            ))}
            <div className="flex justify-between items-center mt-4">
              <p className="text-xl font-semibold">Subtotal:</p>
              <p className="text-xl font-semibold">
                ${getCartTotal().toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={clearCart}
                className="bg-white text-black border border-black px-4 py-2 rounded-md"
              >
                Clear Cart
              </button>
              <Link
                to="/checkout"
                className="bg-white text-black border border-black px-4 py-2 rounded-md"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
