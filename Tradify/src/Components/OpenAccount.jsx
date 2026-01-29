import { Link } from "react-router-dom";

export default function OpenAccount() {
    return (
        <section className="text-center py-20 px-6">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                Open a Tradify account
            </h2>

            <p className="text-gray-600 text-base mb-8">
                Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
            </p>

            <Link to="/signup" className="bg-[#387ed1] hover:bg-[#2a62a5] text-white px-10 py-2.5 rounded text-xl font-medium transition duration-300 inline-block">
                Sign up for free
            </Link>
        </section>
    );
}
