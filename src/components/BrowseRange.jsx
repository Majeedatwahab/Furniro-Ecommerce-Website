import data from "../data/BrowseRange.json"; // Import the JSON data

function BrowseRange() {
  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-8">Browse the Range</h1>
      <p className="text-center text-xl text-666666 mt-2">
        Browse our wide range of products to find the perfect fit for your
        space.
      </p>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {data.BrowseRange.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md"
          >
            <img
              src={product.image}
              alt={product.alt}
              className="w-full h-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
          </div>
        ))}
      </section>
    </>
  );
}

export default BrowseRange;
