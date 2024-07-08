import { useState, useContext, useRef, useEffect } from "react";
import { HiOutlineSearch, HiOutlineHeart, HiOutlineMenu } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { CartContext } from "../context/cart-context.jsx";
import { useWishlist } from "../context/wishlist-context";
import AllProducts from "../data/AllProducts.json";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartItemCount } = useContext(CartContext);
  const cartItemCount = getCartItemCount();
  const { wishlistItems } = useWishlist();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);
  const inputValueRef = useRef();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = inputValueRef.current.value.trim();
    setSearchQuery(inputValue);
    setFilteredProduct([]);
  };

  useEffect(() => {
    console.log(AllProducts);
    const filteredSearchedProduct = AllProducts.AllProducts.filter(
      (product) => {
        const nameMatch = product.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        return nameMatch;
      }
    );
    setFilteredProduct(filteredSearchedProduct);
  }, [searchQuery]);

  return (
    <>
      <header className="flex flex-wrap p-4 justify-between w-full  px-8 lg:px-28 gap-6 lg:gap-[3rem] items-center border-b-2 border-b-secondary relative z-50">
        <div className="logo">
          <Link to="/">
            <img src="/assets/furniro-logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Navigation links for larger screens */}
        <nav className="hidden lg:flex lg:items-center space-x-4">
          <NavLink className="px-2 py-1 hover:underline font-medium" to="/">
            Home
          </NavLink>
          <NavLink className="px-2 py-1 hover:underline font-medium" to="/shop">
            Shop
          </NavLink>
          <NavLink
            className="px-2 py-1 hover:underline font-medium"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="px-2 py-1 hover:underline font-medium"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className="px-2 py-1 hover:underline font-medium"
            to="/signin"
            onClick={handleToggle}
          >
            Login
          </NavLink>
        </nav>

        {/* Hamburger menu button for small screens */}
        <div className="lg:hidden">
          <button onClick={handleToggle} className="focus:outline-none">
            {isOpen ? (
              <CgClose size={24} className="text-gray-600" />
            ) : (
              <HiOutlineMenu size={24} className="text-gray-600" />
            )}
          </button>
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-2 lg:hidden z-40">
            <nav className="flex flex-col items-center space-y-4">
              <NavLink
                className="px-2 py-1 hover:underline font-medium"
                to="/"
                onClick={handleToggle}
              >
                Home
              </NavLink>
              <NavLink
                className="px-2 py-1 hover:underline font-medium"
                to="/shop"
                onClick={handleToggle}
              >
                Shop
              </NavLink>
              <NavLink
                className="px-2 py-1 hover:underline font-medium"
                to="/about"
                onClick={handleToggle}
              >
                About
              </NavLink>
              <NavLink
                className="px-2 py-1 hover:underline font-medium"
                to="/account"
                onClick={handleToggle}
              >
                Contact
              </NavLink>
              <NavLink
                className="px-2 py-1 hover:underline font-medium"
                to="/signin"
                onClick={handleToggle}
              >
                Login
              </NavLink>
            </nav>
          </div>
        )}
        {/* Search form */}
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            ref={inputValueRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products"
            className="p-2 rounded-l bg-gray-200 text-black w-40 mr-2"
          />
          <button type="submit" className="p-2 bg-black text-white rounded-r">
            <HiOutlineSearch size={16} />
          </button>
        </form>
        {/* Header icons */}
        <div className="header-icons flex gap-8 items-center">
          <Link to="account">
            <FaRegUser
              size={16}
              className="w-6 h-6 text-black-600 hover:text-gray-900 cursor-pointer"
            />
          </Link>

          <Link to="/wishlist" className="text-black-600 hover:text-gray-900">
            <div className="relative">
              {wishlistItems.length > 0 && (
                <span className="flex absolute -top-1 -right-2 h-2 w-2  mb-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-black">
                  {wishlistItems.length}
                </span>
              )}
            </div>
            <HiOutlineHeart size="24" />
          </Link>
          <Link to="/cart" className="text-black-600 hover:text-gray-900">
            <div className="relative">
              <p className="flex absolute -top-1 -right-2 h-2 w-2  mb-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-black">
                {cartItemCount}
              </p>
            </div>
            <BsCart3 size="24" />
          </Link>
        </div>
      </header>

      {/* Render search results */}
      {searchQuery && (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Search Results</h1>
          {filteredProduct.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProduct.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="text-black"
                >
                  <div className="border p-4 rounded cursor-pointer">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p>No products found for your search.</p>
          )}
        </div>
      )}
    </>
  );
}

export default Header;
