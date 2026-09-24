import { useState } from "react";
import {
  CalendarDays,
  Camera,
  Gift,
  Heart,
  Home,
  Menu,
  Sparkles,
  Target,
  User,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menus = [
  { name: "Beranda", path: "/", icon: Home },
  { name: "Tahun ke-27", path: "/this-year", icon: Sparkles },
  { name: "Tentang Ayu", path: "/about-you", icon: User },
  { name: "Momen", path: "/moments", icon: Camera },
  { name: "Impian", path: "/dreams", icon: Target },
  { name: "Kejutan", path: "/surprise", icon: Gift },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2">
      <div className="rounded-3xl border border-pink-200/60 bg-white/90 px-4 py-3 shadow-xl shadow-pink-200/20 backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex shrink-0 items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e9a6c0] shadow-md shadow-pink-200">
              <Heart size={16} className="fill-white text-white" />
            </div>

            <div>
              <p className="font-serif text-lg font-semibold text-[#211a2e]">
                untuk ayu<span className="text-[#8b5cf6]">.</span>
              </p>
            </div>
          </NavLink>

          <div className="hidden items-center gap-1 lg:flex">
            {menus.map((menu) => {
              const Icon = menu.icon;

              return (
                <NavLink
                  key={menu.path}
                  to={menu.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition xl:px-4 ${
                      isActive
                        ? "bg-[#211a2e] text-white shadow-lg shadow-purple-200"
                        : "text-gray-500 hover:bg-pink-50 hover:text-[#211a2e]"
                    }`
                  }
                >
                  <Icon size={14} />
                  {menu.name}
                </NavLink>
              );
            })}
          </div>

          <div className="hidden text-xs font-semibold text-[#8b5cf6] sm:block">
            26.09.2026
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#211a2e] text-white lg:hidden"
            aria-label="Buka menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 border-t border-pink-100 pt-3 lg:hidden">
            <div className="grid gap-1">
              {menus.map((menu) => {
                const Icon = menu.icon;

                return (
                  <NavLink
                    key={menu.path}
                    to={menu.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-[#211a2e] text-white"
                          : "text-gray-600 hover:bg-pink-50"
                      }`
                    }
                  >
                    <Icon size={16} />
                    {menu.name}
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
