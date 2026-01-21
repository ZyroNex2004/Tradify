import ecosystemImg from "../assets/ecosystem.png";

export default function TrustSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-3xl font-semibold mb-8">Trust with confidence</h2>

        <div className="space-y-7 text-gray-600">

          <div>
            <h3 className="font-semibold text-black mb-1">Customer-first always</h3>
            <p>
              That's why millions of customers trust Tradify with their investments,
              making us one of India's fastest growing platforms.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-1">No spam or gimmicks</h3>
            <p>
              No gimmicks, spam, or annoying notifications. High quality apps that
              you use at your pace.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-1">The Tradify universe</h3>
            <p>
              A complete ecosystem of investing, trading, analytics and portfolio tracking tools.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-1">Do better with money</h3>
            <p>
              Smart insights, portfolio health checks and long-term focused tools.
            </p>
          </div>

          <div className="flex gap-10 pt-8 text-blue-600 font-medium">
            <a href="#" className="hover:underline">
              Explore our products →
            </a>
            <a href="#" className="hover:underline">
              Try demo →
            </a>
          </div>

        </div>
      </div>

      {/* RIGHT GRAPHIC */}
      <div className="flex justify-center">
        <img
          src={ecosystemImg}
          alt="Tradify ecosystem"
          className="w-full max-w-lg"
        />
      </div>

    </section>
  );
}
