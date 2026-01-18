import { useNavigate } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";

export default function Login() {
  const navigate = useNavigate();

  return (
    <PublicLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Tradify Login</h2>

          <div className="space-y-4">
            <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
            <input type="password" placeholder="Password" className="w-full border p-2 rounded" />

            <button
              onClick={() => navigate("/")}
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
