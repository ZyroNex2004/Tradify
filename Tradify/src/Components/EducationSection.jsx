import pricingEqImg from "../assets/pricing-eq.svg";
import otherTradesImg from "../assets/other-trades.svg";

export default function PricingSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Unbeatable pricing</h2>

          <p className="text-gray-600 mb-4">
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>

          <a href="#" className="text-blue-600 font-medium inline-block mb-6">
            See pricing →
          </a>
        </div>

        {/* RIGHT PRICE BOXES */}
        <div className="flex justify-between items-center">

          {/* ₹0 Free account opening */}
          <div className="flex items-center gap-3">
            <img src={pricingEqImg} alt="Free account opening" className="w-28" />
            <div className="text-sm text-gray-600 leading-tight">
              Free account<br />opening
            </div>
          </div>

          {/* ₹0 Free equity delivery */}
          <div className="flex items-center gap-3">
            <img src={pricingEqImg} alt="Free equity delivery" className="w-28" />
            <div className="text-sm text-gray-600 leading-tight">
              Free equity delivery<br />and mutual funds
            </div>
          </div>

          {/* ₹20 Intraday & F&O */}
          <div className="flex items-center gap-3">
            <img src={otherTradesImg} alt="Intraday and F&O" className="w-28" />
            <div className="text-sm text-gray-600 leading-tight">
              Intraday and<br />F&O
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
