import { useState } from "react";
import MegaMenu from "./MegaMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative bg-white border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">Tradify</div>

        {/* Nav */}
        <nav className="flex gap-6 items-center text-gray-700">

          <a href="#">Signup</a>
          <a href="#">About</a>

          {/* Products with Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="font-medium hover:text-blue-600">
              Products
            </button>

            {open && <MegaMenu />}
          </div>

          <a href="#">Pricing</a>
          <a href="#">Support</a>

        </nav>
      </div>
    </header>
  );
}
