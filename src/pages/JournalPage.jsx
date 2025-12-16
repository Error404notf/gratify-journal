import {motion} from 'framer-motion'
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import AffirmationCard from "../components/AffirmationCard";

function JournalPage() {
  const { user, logout } = useAuth();
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);
  const [streak, setStreak] = useState(0);

  // Helper: returns YYYY-MM-DD
  const getToday = () => new Date().toISOString().split("T")[0];

  useEffect(() => {
    const storedEntries =
      JSON.parse(localStorage.getItem("journalEntries")) || [];
    const storedStreak =
      Number(localStorage.getItem("journalStreak")) || 0;

    setEntries(storedEntries);
    setStreak(storedStreak);
  }, []);

  const handleSave = () => {
    if (!entry.trim()) return;

    const today = getToday();
    const lastEntryDate = localStorage.getItem("lastEntryDate");

    let newStreak = 1;

    if (lastEntryDate) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split("T")[0];

      if (lastEntryDate === today) {
        newStreak = streak; // already counted today
      } else if (lastEntryDate === yesterdayStr) {
        newStreak = streak + 1;
      } else {
        newStreak = 1; // streak reset
      }
    }

    const newEntries = [
      ...entries,
      {
        text: entry,
        date: new Date().toISOString(),
      },
    ];

    setEntries(newEntries);
    setStreak(newStreak);

    localStorage.setItem("journalEntries", JSON.stringify(newEntries));
    localStorage.setItem("journalStreak", newStreak);
    localStorage.setItem("lastEntryDate", today);

    setEntry("");
    alert("Entry saved! 💜");
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="min-h-screen bg-purple-50 p-6"
  >
      <div className="flex justify-between items-center mb-4">
  <p className="text-sm text-gray-600">
    Logged in as <strong>{user?.name}</strong>
  </p>

  <button
    onClick={logout}
    className="text-sm text-red-500 hover:underline"
  >
    Logout
  </button>
</div>
      <h1 className="text-4xl font-semibold text-center mb-6 text-purple-800">
        Gratify Journal
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <main className="md:col-span-2">
          <section className="bg-white p-6 rounded-lg shadow mb-6">
            <label className="block mb-2 text-lg font-medium text-purple-700">
              Write your thoughts
            </label>

            <textarea
              className="w-full h-40 p-4 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="How are you feeling today?"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
            />

            <button
              onClick={handleSave}
              className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition active:scale-95"

            >
              Save Entry
            </button>
            
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Your Entries
            </h2>

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
                       className="p-5 bg-white shadow rounded-xl border border-purple-200 hover:shadow-md transition"
                    >
                      <div  className="text-gray-800 whitespace-pre-wrap leading-relaxed">
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
            <p className="text-sm text-gray-600 mt-2">
              Days in a row
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-medium mb-2">Quick tip</h4>
            <p className="text-sm text-gray-600">
              Write for at least 2 minutes — short and sincere works best.
            </p>
          </div>
        </aside>
      </div>
      </motion.div>
  );
}

export default JournalPage;
