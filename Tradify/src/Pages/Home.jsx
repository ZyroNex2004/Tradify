import PublicLayout from "../layouts/PublicLayout";
import landingImg from "../assets/landing.svg";
import TrustSection from "../Components/TrustSection";
import EducationSection from "../Components/EducationSection"; // ✅ NEW

export default function Home() {
  return (
    <PublicLayout>
      <div className="bg-white">

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 text-center">

          {/* Image */}
          <div className="flex justify-center mb-12">
            <img
              src={landingImg}
              alt="Trading platform"
              className="w-full max-w-4xl"
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900">
            Invest in everything
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg mb-8">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>

          {/* Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg transition">
            Sign up for free
          </button>

        </section>

        {/* Trust Section */}
        <TrustSection />

        {/* Education Section (NEW – image right, text left) */}
        <EducationSection />

      </div>
    </PublicLayout>
  );
}
