// RDD
import { Outlet } from "react-router";

// components
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-4 px-10">
        <Outlet />
      </main>
    </div>
  );
}
