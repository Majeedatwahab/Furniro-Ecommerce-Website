import React, { useState } from "react";

import { Link as RouterLink } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";
import { Icon } from "@iconify/react";
import filterIcon from "@iconify-icons/mi/filter";
import viewGridIcon from "@iconify-icons/heroicons-solid/view-grid";
import viewListIcon from "@iconify-icons/heroicons-solid/view-list";
import data from "../data/AllProducts.json"; // Import the JSON data
import Services from "../components/Services.jsx";
import Footer from "./Footer.jsx";

function AllProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.AllProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(data.AllProducts.length / itemsPerPage);

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-14 h-14 mx-1 rounded-lg focus:outline-none ${
            currentPage === i
              ? "bg-B88E2F text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
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
            Shop
          </h1>
          <div className="flex space-x-2 text-black">
            <RouterLink
              to="/"
              className="hover:text-black"
              style={{ textDecoration: "none" }}
            >
              Home
            </RouterLink>
            <IoIosArrowForward size="24" className="font-bold" />
            <RouterLink
              to="/about"
              className="hover:text-black"
              style={{ textDecoration: "none" }}
            >
              About
            </RouterLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between mt-4 p-4 bg-F9F1E7">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          <div className="flex items-center space-x-2 sm:gap-4 mb-4 sm:mb-0">
            <div className="text-black p-2">
              <Icon icon={filterIcon} width="24" height="24" />
            </div>
            <h3 className="text-gray-600 text-sm">Filter</h3>
            <Icon
              icon={viewGridIcon}
              width="24"
              height="24"
              style={{ color: "black" }}
            />
            <Icon
              icon={viewListIcon}
              width="24"
              height="24"
              style={{ color: "black" }}
            />
            <p className="text-center text-sm ml-4">
              Showing {indexOfFirstItem + 1}-{indexOfLastItem} of{" "}
              {data.AllProducts.length} results
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <form className="flex items-center space-x-2">
              <label htmlFor="results">Show</label>
              <input
                type="text"
                name="results"
                value="8"
                readOnly
                className="border border-gray-300 p-1 w-14 h-14 text-center text-999999 text-xl"
              />
              <label htmlFor="sort">Sort By</label>
              <input
                type="text"
                name="sort"
                value="Default"
                readOnly
                className="border border-gray-300 p-1 w-20 h-14 text-center text-999999 text-xl"
              />
            </form>
          </div>
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
        {currentItems.map((product) => {
          return (
            <RouterLink
              to={`/product/${product.id}`}
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
            </RouterLink>
          );
        })}
      </section>
      <div className="flex justify-center mt-8">{renderPagination()}</div>
      <Services />
      <Footer />
    </>
  );
}

export default AllProducts;
