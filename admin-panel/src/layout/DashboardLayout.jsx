import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
export default function DashboardLayout() {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          open ? "ml-64" : "ml-20"
        }`}
      >
        <Header />

        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}