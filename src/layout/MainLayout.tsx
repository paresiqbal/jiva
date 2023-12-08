// RDD
import { Outlet } from "react-router";

// components
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="p-12 lg:px-36 mx-auto text-gray-900">
        <Outlet />
      </main>
    </div>
  );
}
