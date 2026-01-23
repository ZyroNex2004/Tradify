import pricingImg from "../assets/pricing-eq.svg";

export default function EducationSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-3xl font-semibold mb-6">
          Free and open market education
        </h2>

        <p className="text-gray-600 mb-4">
          Varsity, the largest online stock market education book in the world
          covering everything from the basics to advanced trading.
        </p>

        <a href="#" className="text-blue-600 font-medium inline-block mb-8">
          Varsity →
        </a>

        <p className="text-gray-600 mb-4">
          TradingQ&amp;A, the most active trading and investment community in India
          for all your market related queries.
        </p>

        <a href="#" className="text-blue-600 font-medium">
          TradingQ&amp;A →
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <img
          src={pricingImg}
          alt="Market education"
          className="max-w-md w-full"
        />
      </div>

    </section>
  );
}
