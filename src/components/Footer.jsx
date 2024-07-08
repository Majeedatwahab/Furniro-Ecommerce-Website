import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <hr className="my-8" />
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full h-auto px-4 sm:px-8 py-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Furniro.</h1>
          <p className="text-999999 text-base leading-relaxed mt-4">
            400 University Drive Suite 200 Coral
            <br />
            Gables, FL 33134 USA
          </p>
        </div>
        <div>
          <h1 className="text-999999 text-base font-semibold mb-2">Links</h1>
          <nav className="flex flex-col gap-y-2 mt-6">
            <NavLink className="hover:underline font-medium" to="/">
              Home
            </NavLink>
            <NavLink className="hover:underline font-medium" to="/shop">
              Shop
            </NavLink>
            <NavLink className="hover:underline font-medium" to="/about">
              About
            </NavLink>
            <NavLink className="hover:underline font-medium" to="/contact">
              Contact
            </NavLink>
          </nav>
        </div>
        <div>
          <h1 className="text-999999 text-base font-semibold mb-2">Help</h1>
          <nav className="flex flex-col gap-y-2 mt-6">
            <NavLink className="hover:underline font-medium" to="/">
              Payment Options
            </NavLink>
            <NavLink className="hover:underline font-medium" to="/shop">
              Returns
            </NavLink>
            <NavLink className="hover:underline font-medium" to="/about">
              Privacy Policies
            </NavLink>
          </nav>
        </div>
        <div>
          <h1 className="text-999999 text-base font-semibold mb-2">
            Newsletter
          </h1>
          <form className="mt-6">
            <input
              type="text"
              className="border-2 border-gray-300 px-4 py-2 rounded-md w-full sm:w-auto"
              placeholder="Enter Your Email Address"
            />
            <button className=" text-black underline px-8 py-2 ">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <hr className="my-8" />
      <div className="">
        <p>2023 Furniro. All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;
