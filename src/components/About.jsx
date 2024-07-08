import Footer from "./Footer";
import Services from "./Services";

function About() {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse justify-center items-start gap-10 px-4">
        <div className=" ">
          <img
            src="assets/furniro-brand.png"
            className="rounded mt-6"
            alt="brand picture"
          />
        </div>
        <div className="p-6">
          <h1 className="text-4xl font-bold  text-center mb-4">
            About <span className="text-B88E2F">Us</span>
          </h1>
          <p className="text-lg font-semibold text-black mb-4">
            Welcome to{" "}
            <span className="font-bold text-B88E2F">Furniro Furniture</span>,
            where passion for craftsmanship meets timeless design. Since 2022,
            we have been dedicated to creating furniture pieces that elevate
            your living spaces.
          </p>
          <p className="text-lg font-semibold text-black mb-4">
            Founded by{" "}
            <span className="font-bold text-B88E2F">TheTechHijabie</span>,
            Furniro started with a vision to redefine home decor. Over the
            years, we’ve grown into a trusted name in the industry, known for
            our commitment to quality and innovation.
          </p>
          <p className="text-lg font-semibold text-black mb-4">
            At Furniro, our mission is to inspire and enhance your home with
            meticulously crafted furniture that combines style with
            functionality. We believe in creating pieces that stand the test of
            time, both in durability and aesthetic appeal.
          </p>
          <p className="text-lg font-semibold text-black mb-4">
            With a dedication to quality and a passion for design, Furniro
            offers a curated collection of furniture that transforms houses into
            homes. Discover our range of sofas, tables, beds crafted to blend
            seamlessly with any interior style.
          </p>
        </div>
      </div>
      <Services />
      <Footer />
    </>
  );
}

export default About;
