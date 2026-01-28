import landingImg from "../assets/landing.svg";

export default function Hero() {
    return (
        <section className="text-center py-20 px-6">
            <div className="flex justify-center mb-12">
                <img
                    src={landingImg}
                    alt="Trading platform"
                    className="w-full max-w-2xl"
                />
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-800">
                Invest in everything
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
            </p>

            <button className="bg-[#387ed1] hover:bg-[#2a62a5] text-white px-10 py-2.5 rounded text-xl font-medium transition duration-300">
                Sign up for free
            </button>
        </section>
    );
}
