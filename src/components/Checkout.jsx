import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { CartContext } from "../context/cart-context";
import { useState, useContext } from "react";

import Services from "./Services";
import Footer from "./Footer";

function Checkout() {
  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    street: "",
    apartment: "",
    town: "",
    number: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [paymentMethod, setPaymentMethod] = useState(0);
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log("Payment Method:", paymentMethod);
  };

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
            Checkout
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
              Checkout
            </Link>
          </div>
        </div>
      </div>
      <div className="checkout-container flex flex-col md:flex-row gap-6 p-4">
        <div className="billing w-full md:w-1/2 lg:w-2/5 xl:w-2/5">
          <h1 className="text-4xl font-semibold mb-6">Billing Details</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-rows space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="form-groups mb-4 md:w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block text-black text-base font-medium mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="firstName"
                    value={formData.firstName}
                    required
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-groups mb-4 md:w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-black font-medium mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="lastName"
                    value={formData.lastName}
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-groups">
                <label
                  htmlFor="company"
                  className="block text-black font-medium mb-2"
                >
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-groups">
                <label
                  htmlFor="street"
                  className="block text-black font-medium mb-2"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="street"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="street"
                  value={formData.street}
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-groups">
                <label
                  htmlFor="apartment"
                  className="block text-black font-medium mb-2"
                >
                  Apartment, floor, etc (optional)
                </label>
                <input
                  type="text"
                  id="apartment"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-groups">
                <label
                  htmlFor="town"
                  className="block text-black font-medium mb-2"
                >
                  Town/City
                </label>
                <input
                  type="text"
                  id="town"
                  name="town"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.town}
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-groups">
                <label
                  htmlFor="number"
                  className="block text-black font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.number}
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-groups">
                <label
                  htmlFor="email"
                  className="block text-black font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.email}
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="h-4 w-4 mr-2"
              />
              <label htmlFor="checkbox" className="save text-sm">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        <div className="checkout-details w-full md:w-1/2 lg:w-3/5 xl:w-3/5">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold mb-6 text-center">
              Checkout Summary
            </h1>
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-item flex justify-between">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
                <span>
                  {item.name} - {item.description}
                </span>
                <span>${item.price}</span>
              </div>
            ))}
          </div>

          <div className="checkout-summary mt-8">
            <div className="checkout-subtotal flex justify-between text-base font-bold">
              <span>Subtotal:</span>
              <span>${getCartTotal()}</span>
            </div>
            <hr className="my-2" />
            <div className="checkout-shipping flex justify-between  text-base font-bold">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr className="my-2" />
            <div className="checkout-total flex justify-between text-base font-bold">
              <span>Total:</span>
              <span>${getCartTotal()}</span>
            </div>
          </div>

          <div className="payment-methods mt-8">
            <div className="flex items-center gap-4">
              <input
                type="radio"
                name="payment-method"
                id="bank"
                checked={paymentMethod === "bank"}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="bank" className="text-999999 text-base font-bold">
                Direct Bank Transfer
              </label>
            </div>
            {paymentMethod === "bank" && (
              <p className="text-sm text-black font-bold mt-2 leading-6">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account. <br />
                Account Name: Majeedat Ayomide Abdulwahab <br />
                Account number: 40630255641694380 <br />
                Account Bank: Wells Fargo
              </p>
            )}

            <p className="text-black font-bold text-base"></p>
            <div className="flex items-center gap-4">
              <input
                type="radio"
                name="payment-method"
                id="cash"
                checked={paymentMethod === "cash"}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="cash" className="text-999999 text-base font-bold">
                Cash on Delivery
              </label>
            </div>
          </div>
          <p className="mt-4 font-light text-black text-base">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="text-base font-semibold"> privacy policy.</span>
          </p>
          <button
            type="submit"
            className="bg-white text-black w-64 h-16 border border-black font-bold py-2 px-4 rounded mt-6 items-center"
            onClick={clearCart}
          >
            Place Order
          </button>
        </div>
      </div>
      <Services />
      <Footer />
    </>
  );
}

export default Checkout;
