// src/components/ProductDetails.jsx
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import StarRatings from "react-star-ratings";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import data from "../data/AllProducts.json";
import Productdata from "../data/RelatedProducts.json";
import Footer from "../components/Footer.jsx";
import { CartContext } from "../context/cart-context.jsx";
import CartSidebar from "../components/CartSidebar.jsx";
import { useWishlist } from "../context/wishlist-context";

const ProductDetails = () => {
  const {
    addToCart,
    cartItems,
    removeFromCart,
    removeItemFromCart,
    clearCart,
    getCartTotal,
  } = useContext(CartContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { addToWishlist, removeFromWishlist, isItemInWishlist } = useWishlist();
  let { id } = useParams();

  useEffect(() => {
    if (data && data.AllProducts) {
      const foundProduct = data.AllProducts.find(
        (p) => p.id === parseInt(productId)
      );
      setProduct(foundProduct);
    } else {
      setError("Data not loaded properly");
    }
  }, [productId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setSidebarOpen(true); // Open the sidebar when an item is added to the cart
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleToggleWishlist = () => {
    if (isItemInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const inWishlist = isItemInWishlist(product.id);
  return (
    <>
      <div className="container mx-auto p-6 bg-white rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.image}
              alt={product.alt}
              className="w-[420px] h-[500px] rounded-md bg-F9F1E7"
            />
            <div className="flex space-x-4 mt-4">
              {product.images &&
                product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.name} ${index}`}
                    className="w-16 h-16 rounded-md shadow-md"
                  />
                ))}
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <div>
                <p className="text-2xl font-semibold text-999999 mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex items-center mb-4">
                  <StarRatings
                    rating={product.stars}
                    starRatedColor="orange"
                    numberOfStars={5}
                    name="rating"
                    starDimension="24px"
                    starSpacing="2px"
                  />
                  <span className="ml-2 text-999999 text-sm">
                    ({product.reviews} Customer Reviews)
                  </span>
                </div>
              </div>
              <p className="text-black text-sm mb-4">{product.details}</p>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                <div className="product-quantity flex items-center bg-white rounded-md border border-gray-400 p-2 sm:p-0">
                  <button
                    onClick={decreaseQuantity}
                    className="text-black text-base px-3 py-1 rounded-md mr-2"
                  >
                    -
                  </button>
                  <span className="text-center w-12 text-base">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="text-black px-3 py-1 text-base rounded-md ml-2"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="w-full sm:w-auto px-4 py-2 text-black text-xl border border-black rounded-md hover:bg-gray-200"
                >
                  Add To Cart
                </button>
                <button
                  onClick={handleToggleWishlist}
                  className="w-full sm:w-auto flex items-center justify-center space-x-1 px-4 py-2 text-black text-xl border border-black rounded-md hover:bg-gray-200"
                >
                  {inWishlist ? (
                    <HiHeart size="24" />
                  ) : (
                    <HiOutlineHeart size="24" />
                  )}
                  <span>{inWishlist ? "Remove" : "Add to Wishlist"}</span>
                </button>
              </div>
            </div>
            <hr />
            <div className="flex flex-col text-sm text-999999 gap-4">
              <div>SKU: {product.sku}</div>
              <div>Category: {product.category}</div>
              <div>Tags: {product.tags}</div>
              <div className="flex items-center">
                Share:
                <a href="#" className="text-gray-600 hover:text-gray-900 ml-2">
                  <FaFacebook size="24" color="black" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 ml-2">
                  <FaLinkedin size="24" color="black" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 ml-2">
                  <FaSquareXTwitter size="24" color="black" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8 w-full" />
        <div className="related-products">
          <h2 className="text-center text-black font-bold text-3xl mb-4">
            Related Products
          </h2>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
            {Productdata.RelatedProducts.map((product) => (
              <div
                key={product.id}
                className="relative bg-white p-4 rounded-lg shadow-lg group"
              >
                {product.discount && (
                  <div className="absolute top-8 right-8 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    -{product.discount}%
                  </div>
                )}
                {product.tag === "New" && (
                  <div className="absolute top-8 left-8 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    New
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-64 object-cover mb-4 rounded-md"
                />
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-500 mb-2">{product.description}</p>
                  <div className="flex justify-center items-baseline mb-4">
                    <span className="text-lg font-bold text-gray-900 mr-2">
                      ${product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm line-through text-gray-500">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => {
                      console.log("Adding to cart:", product);
                      addToCart(product);
                      setSidebarOpen(true); // Open the sidebar when an item is added to the cart
                    }}
                    className="bg-white text-B88E2F px-6 py-2 mb-4 rounded-lg font-bold"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-4">
        <button className="bg-white text-B88E2F px-4 py-2 w-[245px] rounded-md border border-B88E2F">
          Show More
        </button>
      </div>
      <Footer />

      <CartSidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        removeItemFromCart={removeItemFromCart}
        clearCart={clearCart}
        getCartTotal={getCartTotal}
      />
    </>
  );
};

export default ProductDetails;
