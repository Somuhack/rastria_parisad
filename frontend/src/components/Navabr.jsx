import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { routes } from "../routes/routes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-12">

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">

          {routes.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => item.key && setActiveDropdown(item.key)}
              onMouseLeave={() => setActiveDropdown(null)}
            >

              {/* Parent Menu */}
              {item.children ? (
                <div className="flex items-center gap-1 cursor-pointer hover:text-green-400 transition">
                  {item.label}
                  <FiChevronDown
                    className={`transition-transform duration-300 ${
                      activeDropdown === item.key ? "rotate-180" : ""
                    }`}
                  />
                </div>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-green-400 transition"
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown */}
              {item.children && (
                <div
                  className={`absolute left-0 top-full w-48 bg-black/90 backdrop-blur-md rounded shadow-lg overflow-hidden
                  transform transition-all duration-300 origin-top
                  ${
                    activeDropdown === item.key
                      ? "opacity-100 scale-y-100 translate-y-0"
                      : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.path}
                      className="block px-4 py-2 hover:bg-green-600/40 transition"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/90 px-6 overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        {routes.map((item, index) => (
          <div key={index} className="border-b border-white/10">

            <div
              className="flex justify-between items-center py-3 cursor-pointer"
              onClick={() => {
                if (item.children) {
                  setMobileDropdown(
                    mobileDropdown === item.key ? null : item.key
                  );
                } else {
                  setOpen(false);
                }
              }}
            >
              {item.children ? (
                <span>{item.label}</span>
              ) : (
                <Link to={item.path}>{item.label}</Link>
              )}

              {item.children && (
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    mobileDropdown === item.key ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>

            {/* Mobile Dropdown */}
            <div
              className={`pl-4 overflow-hidden transition-all duration-300 ${
                mobileDropdown === item.key
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {item.children?.map((child) => (
                <Link
                  key={child.label}
                  to={child.path}
                  className="block py-2 text-white/80 hover:text-green-400"
                  onClick={() => setOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>

          </div>
        ))}
      </div>
    </nav>
  );
}