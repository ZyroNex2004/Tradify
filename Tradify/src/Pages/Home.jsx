import { useEffect, useState } from "react";
import PublicLayout from "../layouts/PublicLayout";
import LoginModal from "../components/LoginModal";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    setShowLogin(true); // auto open popup
  }, []);

  return (
    <PublicLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold">Welcome to Tradify 🚀</h1>
      </div>

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
      />
    </PublicLayout>
  );
}
