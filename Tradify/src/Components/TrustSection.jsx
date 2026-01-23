import ecosystemImg from "../assets/ecosystem.png";
import pressLogos from "../assets/press-logos.png"; // add this image in assets

export default function TrustSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Top content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Trust with confidence</h2>

          <div className="space-y-6 text-gray-600">

            <div>
              <h3 className="font-semibold text-black">Customer-first always</h3>
              <p>
                That's why millions of customers trust Tradify with their investments,
                making us one of India's fastest growing platforms.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black">No spam or gimmicks</h3>
              <p>
                No gimmicks, spam, or annoying notifications. High quality apps that
                you use at your pace.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black">The Tradify universe</h3>
              <p>
                A complete ecosystem of investing, trading, analytics and portfolio tracking tools.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black">Do better with money</h3>
              <p>
                Smart insights, portfolio health checks and long-term focused tools.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT GRAPHIC + LINKS */}
        <div className="flex flex-col items-center">

          <img
            src={ecosystemImg}
            alt="Tradify ecosystem"
            className="max-w-md mb-6"
          />

          {/* Links BELOW image */}
          <div className="flex gap-8 text-blue-600 font-medium">
            <a href="#" className="hover:underline">Explore our products →</a>
            <a href="#" className="hover:underline">Try demo →</a>
          </div>

        </div>

      </div>

      {/* PRESS LOGOS SECTION (bottom) */}
      <div className="mt-16 flex justify-center">
        <img
          src={pressLogos}
          alt="Press logos"
          className="max-w-4xl opacity-70"
        />
      </div>

    </section>
  );
}
