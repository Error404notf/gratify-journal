import { useState } from "react";
import { useNavigate } from "react-router";

function AuthPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name.trim()) return;

    localStorage.setItem("gratifyUser", name);
    navigate("/journal");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-indigo-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-2">
          Welcome to Gratify
        </h1>

        <p className="text-sm text-gray-600 text-center mb-6">
          A safe space for reflection, growth, and emotional care.
        </p>

        <label className="block text-sm font-medium text-gray-700 mb-1">
          What should we call you?
        </label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Enter your space 🌿
        </button>

        <p className="text-xs text-gray-400 mt-4 text-center">
          No passwords. No pressure. Just presence.
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
