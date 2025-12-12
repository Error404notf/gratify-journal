import { useState } from "react";

export default function AffirmationCard() {
  const affirmations = [
    "You are worthy of love and peace.",
    "You are capable of amazing things.",
    "Your mind is stronger than your fears.",
    "You deserve rest and softness.",
    "You are growing at your own beautiful pace.",
    "Your feelings are valid and important.",
    "You overcome challenges with grace.",
    "You are becoming a better version of yourself every day.",
    "You are growing gently every day.",
    "You are allowed to rest and take things slowly.",
    "Today is another chance to take a small step forward."
  ];

  const getRandomAffirmation = () => {
    const index = Math.floor(Math.random() * affirmations.length);
    return affirmations[index];
  };

  const [current, setCurrent] = useState(getRandomAffirmation());

  const handleNew = () => {
    setCurrent(getRandomAffirmation());
  };

  const handleSave = () => {
    const saved = JSON.parse(localStorage.getItem("savedAffirmations") || "[]");
    saved.push(current);
    localStorage.setItem("savedAffirmations", JSON.stringify(saved));
    alert("Affirmation saved ❤️");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Today&apos;s Affirmation</h3>

      <p className="text-gray-700 italic text-sm">"{current}"</p>

      <div className="mt-4 flex gap-3">
        <button
          onClick={handleNew}
          className="flex-1 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Get New
        </button>

        <button
          onClick={handleSave}
          className="px-3 py-2 border rounded hover:bg-gray-100"
        >
          Save
        </button>
        <a  href="/saved-affirmations"
             className="text-sm text-gray-600 underline block mt-2 text-center">
          View saved affirmations
        </a>
      </div>
    </div>
  );
}
