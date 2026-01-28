import indexEducation from "../assets/index-education.svg";


export default function EducationSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image Placeholder */}
        <div className="flex justify-center">
          <img src={indexEducation} alt="Education" className="max-w-full" />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Free and open market education</h2>

          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Varsity</h3>
            <p className="text-gray-600 mb-4">
              Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
            </p>
            <a href="#" className="text-blue-600 font-medium hover:text-gray-900 transition">
              Varsity →
            </a>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">TradingQ&A</h3>
            <p className="text-gray-600 mb-4">
              TradingQ&A, the most active trading and investment community in India for all your market related queries.
            </p>
            <a href="#" className="text-blue-600 font-medium hover:text-gray-900 transition">
              TradingQ&A →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
