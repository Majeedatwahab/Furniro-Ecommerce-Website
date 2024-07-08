import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import Footer from "./Footer";
import Services from "./Services";

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    removeItemFromCart,
    clearCart,
    getCartTotal,
  } = useContext(CartContext);

  return (
    <>
      <div className="relative w-full h-[316px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: 'url("/assets/shop-full-bg.jpg")',
          }}
        ></div>
        <div className="relative z-10 p-8 flex flex-col items-center">
          <h1 className="text-black text-center m-auto text-4xl font-bold mb-4 mt-16">
            Cart
          </h1>
          <div className="flex space-x-2 text-black">
            <Link
              to="/"
              className="hover:text-black"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
            <IoIosArrowForward size="24" className="font-bold" />
            <Link
              to="/cart"
              className="hover:text-black"
              style={{ textDecoration: "none" }}
            >
              Cart
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="flex-1">
            <div className="overflow-x-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="hidden md:block p-2 font-bold">Product</div>
                <div className="hidden md:block p-2 font-bold">Price</div>
                <div className="hidden md:block p-2 font-bold">Quantity</div>
                <div className="hidden md:block p-2 font-bold">Subtotal</div>
                {cartItems.map((product) => (
                  <React.Fragment key={product.id}>
                    <div className="p-2 border-b flex flex-col md:flex-row md:items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 rounded mb-2 md:mb-0 md:mr-4"
                      />
                      <div className="text-sm sm:text-base">{product.name}</div>
                    </div>
                    <div className="p-2 border-b flex flex-col md:flex-row md:items-center">
                      ${product.price}
                    </div>
                    <div className="p-2 border-b flex items-center">
                      <button
                        onClick={() => removeFromCart(product)}
                        className="px-2 py-1 border rounded"
                      >
                        -
                      </button>
                      <span className="px-2">{product.quantity}</span>
                      <button
                        onClick={() => addToCart(product)}
                        className="px-2 py-1 border rounded"
                      >
                        +
                      </button>
                    </div>
                    <div className="p-2 border-b flex flex-col md:flex-row md:items-center">
                      <div className="flex justify-between">
                        <span> Subtotal : </span>
                        <span> $ {product.price * product.quantity}</span>
                      </div>
                      <button
                        onClick={() => removeItemFromCart(product)}
                        className="text-red-500 mt-2 md:mt-0 md:ml-4"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-4 mb-4">
              <Link to="/shop">
                <button className="px-4 py-2 border rounded hover:shadow-lg">
                  Return to Shop
                </button>
              </Link>
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-red-500 text-white rounded hover:shadow-lg mt-4 sm:mt-0"
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-F9F1E7 p-4 rounded mt-8 lg:mt-0">
            <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
            <div className="flex justify-between mb-4">
              <span>Subtotal:</span>
              <span>${getCartTotal()}</span>
            </div>
            <div className="flex justify-between font-semibold mb-6">
              <span>Total:</span>
              <span>${getCartTotal()}</span>
            </div>
            <Link to="/checkout" className="block">
              <button className="w-full px-6 py-3 bg-red-500 text-white rounded hover:shadow-lg">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Services />
      <Footer />
    </>
  );
};

export default Cart;
