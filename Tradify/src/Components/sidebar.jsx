import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-56 bg-white border-r p-4">
      <h2 className="text-2xl font-bold mb-8 text-blue-600">Tradify</h2>

      <ul className="space-y-4 text-gray-700">
        <li>
          <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        </li>
        <li>
          <Link to="/orders" className="hover:text-blue-600">Orders</Link>
        </li>
        <li>
          <Link to="/portfolio" className="hover:text-blue-600">Portfolio</Link>
        </li>
      </ul>
    </div>
  );
}
