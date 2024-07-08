import BrowseRange from "./BrowseRange";
import Footer from "./Footer";

import OurProducts from "./OurProducts";
import RoomInspo from "./RoomInspo";
import ShareSetup from "./ShareSetup";

function HomePage() {
  return (
    <>
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/assets/scandinavian-background 1.png")',
          }}
        ></div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2  bg-fff3e3 max-w-2xl w-full md:w-auto  p-8 rounded-lg shadow-lg">
          <div className="text-center md:text-left">
            <p className="text-base text-333333 font-semibold">New Arrival</p>
            <h2 className="font-bold mb-4 text-6xl text-B88E2F">
              Discover our new collection
            </h2>
            <p className="text-lg text-black-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla quam ac sodales lobortis.
            </p>
            <button className="bg-B88E2F text-white px-4 py-2 mt-1 md:px-8 md:py-4 rounded-md">
              Buy now
            </button>
          </div>
        </div>
      </div>
      <BrowseRange />
      <OurProducts />
      <RoomInspo />
      <ShareSetup />
      <Footer />
    </>
  );
}

export default HomePage;
