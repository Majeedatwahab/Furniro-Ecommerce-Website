import React, { useState } from "react";
import data from "../data/RoomInspo.json";

function RoomInspo() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Number of items per page

  // Calculate the items to display based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.RoomInspo.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.RoomInspo.length / itemsPerPage);

  // Pagination buttons
  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-3 h-3 mx-1 rounded-full ${
            currentPage === i ? "bg-B88E2F" : "bg-gray-200"
          }`}
        ></button>
      );
    }
    return pages;
  };

  return (
    <>
      <section className="bg-FCF8F3 w-full h-auto flex flex-col items-center py-8 px-4 sm:px-8">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start m-auto text-center lg:text-left p-8  ">
          <div className="w-full lg:w-1/3 lg:pr-8 mb-8 lg:mb-0">
            <h1 className="text-2xl font-bold mb-4">
              50+ Beautiful Room Inspirations
            </h1>
            <p className="text-gray-700 mb-4">
              Our designer already made a lot of beautiful prototypes of rooms
              that inspire you.
            </p>
            <button className="bg-B88E2F text-white px-8 py-4 mt-4 rounded-md">
              Explore More
            </button>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {currentItems.map((product) => (
              <div
                key={product.id}
                className="relative bg-white p-4 rounded-lg shadow-lg group"
              >
                <img
                  className="w-full h-auto object-cover rounded-t-lg"
                  src={product.image}
                  alt={product.title}
                />
                <div className="p-4">
                  <h3 className="text-base text-616161">{product.name}</h3>
                  <p className="font-bold text-3xl mt-2">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">{renderPagination()}</div>
      </section>
    </>
  );
}

export default RoomInspo;
