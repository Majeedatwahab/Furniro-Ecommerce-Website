import data from "../data/ShareSetup.json";

function ShareSetup() {
  return (
    <>
      <section className="py-8 px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Share Setup</h2>
        <h2 className="text-3xl font-bold text-center">#FurniroFurniture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.ShareSetup.map((item, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                className="object-cover rounded-lg"
                src={item.image}
                alt={item.title}
                style={{ width: item.width, height: item.height }}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ShareSetup;
