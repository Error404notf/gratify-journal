import AffirmationCard from "../components/AffirmationCard";
import { useState, useEffect } from "react";

function JournalPage() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(stored);

    const savedStreak = Number(localStorage.getItem("journalStreak")) || 0;
    const lastDate = localStorage.getItem("lastEntryDate") || null;

    updateStreak(savedStreak, lastDate);
  }, []);

  const updateStreak = (currentStreak, lastDate) => {
    if (!lastDate) {
      setStreak(0);
      return;
    }

    const today = new Date().toDateString();
    const prev = new Date(lastDate).toDateString();

    if (prev === today) {
      setStreak(currentStreak);
    } else {
      const diff =
        (new Date(today) - new Date(prev)) / (1000 * 60 * 60 * 24);

      if (diff === 1) {
        setStreak(currentStreak + 1);
      } else {
        setStreak(0);
      }
    }
  };

  const handleSave = () => {
    if (!entry.trim()) return;

    const newEntries = [
      ...entries,
      { text: entry, date: new Date().toISOString() }
    ];

    const today = new Date().toDateString();
    const lastDate = localStorage.getItem("lastEntryDate");

    let newStreak = streak;

    if (lastDate) {
      const diff =
        (new Date(today) - new Date(lastDate)) / (1000 * 60 * 60 * 24);

      if (diff === 1) {
        newStreak += 1;
      } else if (diff > 1) {
        newStreak = 0;
      }
    } else {
      newStreak = 1;
    }

    setStreak(newStreak);
    localStorage.setItem("journalStreak", newStreak);
    localStorage.setItem("lastEntryDate", today);

    setEntries(newEntries);
    localStorage.setItem("journalEntries", JSON.stringify(newEntries));

    setEntry("");
    alert("Entry saved! 💜");
  };

  return (
    <div className="min-h-screen bg-purple-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Gratify Journal</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <main className="md:col-span-2">
          <section className="bg-white p-6 rounded-lg shadow mb-6">
            <label className="block mb-2 text-lg font-medium">
              Write your thoughts
            </label>

            <textarea
              className="w-full h-40 p-4 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="How are you feeling today?"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
            ></textarea>

            <button
              onClick={handleSave}
              className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Save Entry
            </button>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Your Entries</h2>

            {entries.length === 0 ? (
              <p className="text-gray-600">
                No entries yet… start writing ✨
              </p>
            ) : (
              <ul className="space-y-4">
                {entries
                  .slice()
                  .reverse()
                  .map((item, index) => (
                    <li
                      key={index}
                      className="p-4 bg-white shadow rounded-lg border border-purple-200"
                    >
                      <div className="text-gray-800 whitespace-pre-wrap">
                        {item.text}
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        {new Date(item.date).toLocaleString()}
                      </div>
                    </li>
                  ))}
              </ul>
            )}
          </section>
        </main>

        <aside className="space-y-6">
          <AffirmationCard />

          <div className="bg-white p-4 rounded-lg shadow">
  <h3 className="text-lg font-semibold mb-2">Streak</h3>
  <div className="text-3xl font-bold">🔥 {streak}</div>
  <p className="text-sm text-gray-600 mt-2">Days in a row</p>
</div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-medium mb-2">Quick tip</h4>
            <p className="text-sm text-gray-600">
              Write for at least 2 minutes — short and sincere works best.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default JournalPage;
