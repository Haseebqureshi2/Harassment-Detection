import { useState } from "react";
import { LayoutDashboard, BarChart3, MessageSquare, Menu, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Settings } from "lucide-react";
export default function Sidebar({ open, setOpen }) {

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Analyses", icon: BarChart3, path: "/analyses" },
  { name: "Feedback", icon: MessageSquare, path: "/feedback" },
  {
  name: "Settings",
  icon: Settings,
  path: "/settings",
},
];
const { logout } = useAuth();
const navigate = useNavigate();

const handleLogout = () => {
  logout();
  setOpen(false);
  navigate("/login");
};
  return (
   <aside
  className={`fixed top-0 left-0 h-screen bg-white/80 backdrop-blur-md shadow-md 
  transition-all duration-300 ease-in-out z-40
  ${open ? "w-64" : "w-20"} flex flex-col`}
>
      <div className="flex items-center justify-between px-4 py-5">
       <div className="flex items-center gap-3">
  
  {/* Logo */}
  <img
    src="/safeailogo.png" // 👈 your file in public folder
    alt="Logo"
    className="w-10 h-10 object-contain"
  />

  {/* Title (optional) */}
  <h1
    className={`text-xl font-semibold transition-all duration-300 ${
      open ? "opacity-100" : "opacity-0 hidden"
    }`}
  >
    SafeAI Admin
  </h1>
</div>

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Menu */}
      <nav className="mt-6 flex flex-col gap-2 px-2 flex-1">
     {menuItems.map((item, i) => (
  <NavLink
    key={i}
    to={item.path}
    className={({ isActive }) =>
      `flex items-center gap-3 p-3 rounded-xl cursor-pointer
      transition-all duration-200 group
      ${
        isActive
          ? "bg-[rgb(63,177,181)]/10 text-[rgb(63,177,181)]"
          : "text-gray-600 hover:bg-gray-100"
      }
      ${open ? "justify-start" : "justify-center"}`
    }
  >
    {({ isActive }) => (
      <>
        <item.icon
          size={22}
          className={`transition-transform duration-200 ${
            isActive
              ? "text-[rgb(63,177,181)]"
              : "group-hover:scale-110"
          }`}
        />

        <span
          className={`font-medium text-sm transition-all duration-200 ${
            open ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          {item.name}
        </span>
      </>
    )}
  </NavLink>
))}
      </nav>

     <div
  onClick={handleLogout}
  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer 
  hover:bg-gray-100 text-gray-600 transition
  ${open ? "justify-start" : "justify-center"}`}
>
  <LogOut size={22} className="text-red-500" />

  <span
    className={`transition-all duration-200 ${
      open ? "opacity-100" : "opacity-0 hidden"
    }`}
  >
    Logout
  </span>
</div>
    </aside>
  );
}