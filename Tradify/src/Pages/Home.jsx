import PublicLayout from "../layouts/PublicLayout";

export default function Home() {
  return (
    <PublicLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold">Welcome to Tradify 🚀</h1>
      </div>
    </PublicLayout>
  );
}
