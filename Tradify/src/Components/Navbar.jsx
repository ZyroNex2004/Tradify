import { useState } from "react";
import MegaMenu from "./MegaMenu.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-14 bg-white border-b flex items-center justify-between px-4">

      <div className="flex items-center space-x-6">
        <span className="font-semibold text-gray-800">Dashboard</span>

        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Products
          </button>

          {open && <MegaMenu />}
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <span className="text-sm text-gray-600">Balance: ₹1,00,000</span>
        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
          R
        </div>
      </div>

    </div>
  );
}
