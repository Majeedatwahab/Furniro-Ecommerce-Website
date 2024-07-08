import data from "../data/OurServices.json";

function Services() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 mt-6 w-full h-55 bg-F9F1E7">
        {data.OurServices.map((product) => (
          <div key={product.id} className=" flex items-center space-x-4">
            <img
              src={product.image}
              alt={product.alt}
              className="w-14 h-auto mb-4"
            />
            <div>
              <span className="text-xl font-semibold">{product.name}</span>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Services;
