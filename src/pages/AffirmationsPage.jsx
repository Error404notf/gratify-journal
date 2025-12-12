import { useEffect, useState } from "react";

function AffirmationsPage() {
  const [savedAffirmations, setSavedAffirmations] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedAffirmations")) || [];
    setSavedAffirmations(stored);
  }, []);

  return (
    <div className="p-6 min-h-screen bg-purple-50">
      <h1 className="text-3xl font-bold text-center mt-6">
        Saved Affirmations
      </h1>

      <p className="text-center text-gray-600 mt-2">
        A collection of all the affirmations you’ve saved for inspiration.
      </p>

      {savedAffirmations.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          You haven’t saved any affirmations yet ❤️
        </p>
      ) : (
        <ul className="max-w-2xl mx-auto mt-8 space-y-4">
          {savedAffirmations.map((item, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow border border-purple-200"
            >
              “{item}”
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AffirmationsPage;
