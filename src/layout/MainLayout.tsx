// RDD
import { Outlet } from "react-router";

// components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import backgroundImage from "@/assets/background.png";

export default function MainLayout() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <main className="px-6 lg:px-36 mx-auto text-gray-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
