import PublicLayout from "../layouts/PublicLayout";
import landingImg from "../assets/landing.svg";
import TrustSection from "../Components/TrustSection";
import EducationSection from "../Components/EducationSection";

export default function Home() {
  return (
    <PublicLayout>
      <div className="bg-white">

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="flex justify-center mb-12">
            <img src={landingImg} alt="Trading platform" className="w-full max-w-4xl" />
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900">
            Invest in everything
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg transition">
            Sign up for free
          </button>
        </section>

        {/* Existing section */}
        <TrustSection />

        {/* New section added */}
        <EducationSection />

      </div>
    </PublicLayout>
  );
}
