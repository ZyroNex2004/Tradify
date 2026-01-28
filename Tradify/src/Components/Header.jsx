export default function Header() {
  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/vite.svg"   // replace with your logo
            alt="logo"
            className="h-5"
          />
          <span className="font-semibold text-lg text-gray-800 tracking-tight">TRADIFY</span>
        </div>

        {/* Nav links */}
        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-10 text-sm text-[#666] font-medium">
            <a href="/signup" className="hover:text-blue-600 transition">Signup</a>
            <a href="/about" className="hover:text-blue-600 transition">About</a>
            <a href="/products" className="hover:text-blue-600 transition">Products</a>
            <a href="/pricing" className="hover:text-blue-600 transition">Pricing</a>
            <a href="/support" className="hover:text-blue-600 transition">Support</a>
          </nav>
          {/* Mobile menu icon (optional) */}
          <button className="text-xl ml-8 md:ml-10 text-gray-800">
            <i className="fas fa-bars"></i>
            <span className="md:hidden">☰</span>
          </button>
        </div>
      </div>
    </header>
  );
}
