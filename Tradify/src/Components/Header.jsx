import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left: Logo + Name */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
            T
          </div>
          <span className="text-xl font-bold text-gray-800">Tradify</span>
        </div>

        {/* Right: Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
          <Link to="/signup" className="hover:text-blue-600 transition">Signup</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/product" className="hover:text-blue-600 transition">Product</Link>
          <Link to="/pricing" className="hover:text-blue-600 transition">Pricing</Link>
          <Link to="/support" className="hover:text-blue-600 transition">Support</Link>
        </nav>

      </div>
    </header>
  );
}
