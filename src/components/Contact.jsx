import Footer from "./Footer";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import Services from "./Services";

function Contact() {
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
            Contact
          </h1>
          <div className="flex space-x-2 text-black">
            <Link
              to="/"
              className="hover:text-black"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
            <IoIosArrowForward size="24" className="font-bold" />
            <Link
              to="/contact"
              className="hover:text-black"
              style={{ textDecoration: "none" }}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center my-10 px-4">
        <h1 className="text-4xl font-semibold">Get in touch with us</h1>
        <p className="text-base text-gray-700 mt-6 max-w-2xl mx-auto">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Are Always here To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 px-4">
        <div className="p-6 max-w-md">
          <div className="address mt-4 flex gap-4 mb-2">
            <FaLocationDot size="24" className="text-black" />
            <p className="text-2xl font-medium text-black">Address</p>
          </div>
          <p className="text-base text-black ml-10">
            236 5th SE Avenue, New York NY10000, United States
          </p>
          <div className="phone mt-4 flex gap-4 mb-2">
            <FaPhoneAlt size="24" className="text-black" />
            <p className="text-2xl font-medium text-black">Phone</p>
          </div>
          <p className="text-base text-black ml-10">Mobile: +(84) 546-6789</p>
          <p className="text-base text-black ml-10">Hotline: +(84) 456-6789</p>
          <div className="working-time mt-4 flex gap-4 mb-2">
            <IoTime size="24" className="text-black" />
            <p className="text-2xl font-medium text-black">Working Hours</p>
          </div>
          <p className="text-sm text-black ml-10">
            Mon - Fri : 9:00 AM - 10:00 PM
          </p>
          <p className="text-sm text-black ml-10">
            Sat - Sun : 10:00 AM - 9:00 PM
          </p>
        </div>
        <div className="max-w-md w-full">
          <form className="flex flex-col space-y-4">
            <label className="text-base font-medium">Your Name</label>
            <input
              type="text"
              className="border-2 border-999999 px-4 py-2 rounded-md w-full"
              placeholder="Enter Your Name"
            />
            <label className="text-base font-medium">Your Email</label>
            <input
              type="email"
              className="border-2 border-999999 px-4 py-2 rounded-md w-full"
              placeholder="Enter Your Email"
            />
            <label className="text-base font-medium">Your Message</label>
            <textarea
              className="border-2 border-999999 px-4 py-2 rounded-md w-full h-48"
              placeholder="Write Your Message"
            />
            <button className="text-white bg-B88E2F text-base w-56 px-4 py-2 rounded-md hover:bg-black">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Services />
      <Footer />
    </>
  );
}

export default Contact;
