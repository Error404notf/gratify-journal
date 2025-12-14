import { NavLink } from "react-router";

export default function Navbar() {
  const linkClass =
    "px-4 py-2 rounded hover:bg-purple-100 transition";

  const activeClass =
    "bg-purple-200 font-semibold";

  return (
    <nav className="bg-white shadow mb-6">
      <div className="max-w-6xl mx-auto px-6 py-4 flex gap-4 justify-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/journal"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Journal
        </NavLink>

        <NavLink
          to="/saved-affirmations"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Saved Affirmations
        </NavLink>
      </div>
    </nav>
  );
}
