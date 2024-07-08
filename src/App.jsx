import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./components/HomePage";
import AllProducts from "./components/AllProducts";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import WishList from "./components/WishList";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import About from "./components/About";
import Account from "./components/Account";
import Header from "./components/Header";

import { CartProvider } from "./context/cart-context";

function App() {
  return (
    <CartProvider>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<AllProducts />} />
        <Route path="account" element={<Account />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        {<Route path="/*" element={<NotFound />} />}
      </Routes>
    </CartProvider>
  );
}
export default App;
