export default function Header() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/vite.svg"   // replace with your logo
            alt="logo"
            className="h-6"
          />
          <span className="font-semibold text-lg text-gray-800">TRADIFY</span>
        </div>

        {/* Nav links */}
        <nav className="flex items-center space-x-8 text-sm text-gray-600">

          <a href="/signup" className="hover:text-gray-900">Signup</a>
          <a href="/about" className="hover:text-gray-900">About</a>
          <a href="/products" className="hover:text-gray-900">Products</a>
          <a href="/pricing" className="hover:text-gray-900">Pricing</a>
          <a href="/support" className="hover:text-gray-900">Support</a>

          {/* Mobile menu icon (optional) */}
          <button className="text-xl">☰</button>

        </nav>
      </div>
    </header>
  );
}
