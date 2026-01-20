export default function MegaMenu() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-14 w-[900px] bg-white shadow-2xl rounded-xl p-8 grid grid-cols-4 gap-8 z-50 border">

      {/* Products */}
      <div>
        <h3 className="font-semibold mb-3 text-gray-900">Products</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:text-blue-600 cursor-pointer">Kite</li>
          <li className="hover:text-blue-600 cursor-pointer">Console</li>
          <li className="hover:text-blue-600 cursor-pointer">Kite Connect</li>
          <li className="hover:text-blue-600 cursor-pointer">Coin</li>
        </ul>
      </div>

      {/* Utilities */}
      <div>
        <h3 className="font-semibold mb-3 text-gray-900">Utilities</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:text-blue-600 cursor-pointer">Calculators</li>
          <li className="hover:text-blue-600 cursor-pointer">Brokerage calculator</li>
          <li className="hover:text-blue-600 cursor-pointer">Margin calculator</li>
          <li className="hover:text-blue-600 cursor-pointer">SIP calculator</li>
        </ul>
      </div>

      {/* Updates */}
      <div>
        <h3 className="font-semibold mb-3 text-gray-900">Updates</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:text-blue-600 cursor-pointer">Z-Connect blog</li>
          <li className="hover:text-blue-600 cursor-pointer">Circulars / Bulletin</li>
          <li className="hover:text-blue-600 cursor-pointer">IPOs</li>
          <li className="hover:text-blue-600 cursor-pointer">Markets</li>
        </ul>
      </div>

      {/* Education */}
      <div>
        <h3 className="font-semibold mb-3 text-gray-900">Education</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:text-blue-600 cursor-pointer">Varsity</li>
          <li className="hover:text-blue-600 cursor-pointer">Trading Q&A</li>
        </ul>
      </div>

    </div>
  );
}
