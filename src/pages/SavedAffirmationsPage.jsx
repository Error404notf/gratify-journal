import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function SavedAffirmationsPage() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedAffirmations")) || [];
    setSaved(stored);
  }, []);

  const handleDelete = (indexToRemove) => {
    const updated = saved.filter((_, index) => index !== indexToRemove);
    setSaved(updated);
    localStorage.setItem("savedAffirmations", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-purple-50 p-6">
      <Navbar />
       <a
      href="/journal"
      className="text-sm text-purple-600 hover:underline inline-block mb-4"
    >
      ← Back to Journal
    </a>
      <h1 className="text-3xl font-bold text-center mb-6">
        Saved Affirmations 💜
      </h1>

      {saved.length === 0 ? (
        <p className="text-center text-gray-600">
          You haven't saved any affirmations yet 💜
        </p>
      ) : (
        <ul className="max-w-xl mx-auto space-y-4">
          {saved.map((text, index) => (
            <li
              key={index}
              className="bg-white p-4 shadow rounded-lg border border-purple-200 flex justify-between items-start"
            >
              <span className="text-gray-800 italic">"{text}"</span>

              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 text-sm hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
