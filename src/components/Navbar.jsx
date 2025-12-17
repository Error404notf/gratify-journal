import { Link } from "react-router";
import LogoutButton from "./LogoutButton.jsx";

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-3 flex justify-between items-center">
      <h1 className="font-bold text-purple-700">Gratify 💜</h1>

      <div className="flex gap-4 items-center text-sm">
        <Link to="/journal" className="hover:underline">
          Journal
        </Link>
        
        <Link to="/saved-affirmations" className="hover:underline">
          Saved
        </Link>

        <LogoutButton />
      </div>
    </nav>
  );
}
