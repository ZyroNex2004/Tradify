export default function Navbar() {
  return (
    <div className="h-14 bg-white border-b flex items-center justify-between px-4">
      <span className="font-semibold">Dashboard</span>
      <div className="flex items-center space-x-3">
        <span className="text-sm text-gray-600">Balance: ₹1,00,000</span>
        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
          R
        </div>
      </div>
    </div>
  );
}
