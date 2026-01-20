import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  );
}
