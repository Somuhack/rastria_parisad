import { Link, useLocation } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

const Breadcrumb = () => {
  const location = useLocation();

  // ✅ Add any parent/layout routes here
  const skipPaths = ["about", "dashboard", "admin"];

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x && !skipPaths.includes(x));

  if (location.pathname === "/") return null;

  return (
    <div className="bg-green-600 text-white py-2 px-6 text-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-2">

        {/* Home Icon */}
        <Link to="/" className="hover:underline flex items-center">
          <IoMdHome />
        </Link>

        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");

          return (
            <span key={routeTo} className="flex items-center gap-2">
              /
              <Link to={routeTo} className="hover:underline capitalize">
                {name.replace(/-/g, " ")}
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;