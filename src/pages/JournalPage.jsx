import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import AffirmationCard from "../components/AffirmationCard";

function JournalPage() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);
  const [streak, setStreak] = useState(0);

  const today = new Date().toDateString();

  useEffect(() => {
    const storedEntries =
      JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(storedEntries);

    const storedStreak =
      Number(localStorage.getItem("journalStreak")) || 0;
    setStreak(storedStreak);
  }, []);

  const handleSave = () => {
    if (!entry.trim()) return;

    const lastDate = localStorage.getItem("lastEntryDate");
    let newStreak = streak;

    if (lastDate !== today) {
      newStreak = lastDate
        ? streak + 1
        : 1;
    }

    const newEntries = [
      ...entries,
      { text: entry, date: new Date().toISOString() },
    ];

    setEntries(newEntries);
    setStreak(newStreak);

    localStorage.setItem(
      "journalEntries",
      JSON.stringify(newEntries)
    );
    localStorage.setItem("journalStreak", newStreak);
    localStorage.setItem("lastEntryDate", today);

    setEntry("");
    alert("Entry saved 💜");
  };

  return (
    <div  className="min-h-screen bg-linear-to-br from-purple-50 to-indigo-50">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mb-2 text-purple-700">
        Gratify Journal
      </h1>
      <p  className="text-4xl font-bold text-center mb-2 text-purple-700">A safe space for your thoughts 🌿</p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <main className="md:col-span-2">
          <section className="bg-white p-6 rounded-xl shadow-md mb-6 border border-purple-100">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              What's on your mind right now?
            </label>

            <textarea
             className="w-full h-44 p-4 rounded-lg border border-purple-200
             focus:outline-none focus:ring-2 focus:ring-purple-400
             bg-purple-50 text-gray-800"
             placeholder="You don't have to be perfect. Just be honest"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
            />

            <button
              onClick={handleSave}
             className="mt-4 w-full bg-purple-600 text-white py-3 rounded-lg
  font-medium hover:bg-purple-700 transition active:scale-95"
            >
              Save and breathe 🌿
            </button>
          </section>

          <section>
   
            <h2 className="text-2xl font-semibold mb-4">
              Your Entries
            </h2>

            {entries.length === 0 ? (
              <p className="text-gray-600">
                You haven’t written yet — and that’s okay.
                When you’re ready, this space is yours 💜
              </p>
              
            ) : (
              <ul className="space-y-4">
                       <p className="text-sm text-gray-500 mb-3">
  Your recent reflections
</p>
                {entries
                  .slice()
                  .reverse()
                  .map((item, index) => (
                    <li
                      key={index}
                      className="p-5 bg-white shadow-sm rounded-xl border border-purple-100"
                    >
                      <p className="whitespace-pre-wrap">
                        {item.text}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        {new Date(item.date).toLocaleString()}
                      </p>
                    </li>
                  ))}
              </ul>
            )}
          </section>
        </main>

        <aside className="space-y-6 sticky top-6">
          <AffirmationCard />

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">
              Streak
            </h3>
            <div className="text-3xl font-bold">
              🔥 {streak}
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Days in a row
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-medium mb-2">
              Quick tip
            </h4>
            <p className="text-sm text-gray-600">
              Consistency beats perfection.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default JournalPage;
