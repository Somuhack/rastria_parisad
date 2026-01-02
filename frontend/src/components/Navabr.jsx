import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";


const NAV_ITEMS = [
  {
    label: "HOME",
    path: "/",
  },
   {
    label: "RECOGNIZATION",
    path: "/contact",
  },
  {
    label: "ABOUT US",
    path: "/about",
    key: "about",
    children: [
      { label: "Vision", path: "/about/vision" },
      { label: "Mission", path: "/about/mission" },
    ],
  },
  {
    label: "COURSES",
    path: "/courses",
    key: "courses",
    children: [
      { label: "Course 1", path: "/courses/1" },
      { label: "Course 2", path: "/courses/2" },
    ],
  },
  {
    label: "CONTACT US",
    path: "/",
  },
  {
    label: "CONTACT US",
    path: "/contact",
  },
  {
    label: "About",
    path: "/about",
  },
 
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      document
        .querySelector("nav")
        ?.classList.toggle("bg-black/90", window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-10 text-white">

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5 text-[.7rem]">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.key)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.path}
                className="flex items-center gap-1 hover:text-green-400 transition"
              >
                {item.label}
                {item.children && <FiChevronDown />}
              </Link>

              {item.children && activeDropdown === item.key && (
                <div className="absolute top-full mt-2 w-48 bg-black/80 backdrop-blur-md rounded shadow-lg">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.path}
                      className="block px-4 py-2 hover:bg-green-700/40"
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
      {open && (
        <div className="md:hidden bg-black/90 px-6 py-4 space-y-3 text-sm text-white">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <div
                className="flex justify-between items-center py-2"
                onClick={() =>
                  item.children &&
                  setMobileDropdown(
                    mobileDropdown === item.key ? null : item.key
                  )
                }
              >
                <Link to={item.path} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
                {item.children && <FiChevronDown />}
              </div>

              {item.children && mobileDropdown === item.key && (
                <div className="pl-4 space-y-2 text-white/80">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.path}
                      className="block hover:text-green-400"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
