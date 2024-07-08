import { useContext } from "react";
import data from "../data/OurProducts.json";
import { CartContext } from "../context/cart-context.jsx";

import { toast } from "react-toastify"; // Import toast
function OurProducts() {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.name} has been added to the cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <h1 className="text-center font-bold text-4xl mb-8">Our Products</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
        {data.OurProducts.map((product) => (
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
                    {product.oldPrice}
                  </span>
                )}
              </div>
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => handleAddToCart(product)}
                className="px-4 py-2 text-B88E2F text-xl  rounded-md hover: bg-white"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </section>
      <div className="flex justify-center mt-8 mb-4">
        <button className="bg-white text-B88E2F px-4 py-2 w-[245px] rounded-md border border-B88E2F">
          Show More
        </button>
      </div>
    </>
  );
}

export default OurProducts;
