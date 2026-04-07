import { useState, useRef, useEffect } from "react";
import { UserCircle, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-white/80 backdrop-blur-md flex items-center justify-end px-8 shadow-sm sticky top-0 z-50 border-b border-gray-100">
      
      <div className="relative" ref={dropdownRef}>
        
        {/* User Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-xl transition"
        >
          <UserCircle size={32} className="text-[rgb(63,177,181)]" />
        </div>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg  py-2">
            
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
            >
              <LogOut size={16} />
              Logout
            </button>

          </div>
        )}
      </div>
    </header>
  );
}