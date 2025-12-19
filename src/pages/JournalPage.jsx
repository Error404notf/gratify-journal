import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AffirmationCard from "../components/AffirmationCard";

function JournalPage() {
  const navigate = useNavigate();

  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);
  const [streak, setStreak] = useState(0);

  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const today = new Date().toDateString();

  /* ---------------- AUTH GUARD ---------------- */
  useEffect(() => {
    const user = localStorage.getItem("gratifyUser");
    if (!user) {
      navigate("/auth");
    }
  }, [navigate]);

  /* ---------------- LOAD DATA ---------------- */
  useEffect(() => {
    const storedEntries =
      JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(storedEntries);

    const storedStreak =
      Number(localStorage.getItem("journalStreak")) || 0;
    setStreak(storedStreak);
  }, []);

  /* ---------------- SAVE ENTRY ---------------- */
  const handleSave = () => {
    if (!entry.trim()) return;

    const lastDate = localStorage.getItem("lastEntryDate");
    let newStreak = streak;

    if (!lastDate) {
      newStreak = 1;
    } else if (lastDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (lastDate === yesterday.toDateString()) {
        newStreak = streak + 1;
      } else {
        newStreak = 1;
      }
    }

    const newEntry = {
      id: crypto.randomUUID(),
      text: entry,
      date: new Date().toISOString(),
    };

    const updatedEntries = [...entries, newEntry];

    setEntries(updatedEntries);
    setStreak(newStreak);

    localStorage.setItem(
      "journalEntries",
      JSON.stringify(updatedEntries)
    );
    localStorage.setItem("journalStreak", newStreak);
    localStorage.setItem("lastEntryDate", today);

    setEntry("");
  };

  /* ---------------- EDIT ENTRY ---------------- */
  const startEdit = (item) => {
    setEditingId(item.id);
    setEditingText(item.text);
  };

  const saveEdit = () => {
    const updated = entries.map((item) =>
      item.id === editingId
        ? { ...item, text: editingText }
        : item
    );

    setEntries(updated);
    localStorage.setItem(
      "journalEntries",
      JSON.stringify(updated)
    );

    setEditingId(null);
    setEditingText("");
  };

  /* ---------------- DELETE ENTRY ---------------- */
  const deleteEntry = (id) => {
    const updated = entries.filter((item) => item.id !== id);
    setEntries(updated);
    localStorage.setItem(
      "journalEntries",
      JSON.stringify(updated)
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-indigo-50">
      <Navbar />

      <header className="text-center mb-8 px-4">
        <h1 className="text-4xl font-bold text-purple-700">
          Gratify Journal
        </h1>
        <p className="text-lg text-purple-600 mt-1">
          A safe space for your thoughts 🌿
        </p>
        <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto">
          Gratify helps you slow down, reflect, and build
          emotional consistency through daily writing and
          affirmations.
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* ---------------- MAIN ---------------- */}
        <main className="md:col-span-2">
          <section className="bg-white p-6 rounded-xl shadow-md mb-6 border border-purple-100">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              What's on your mind right now?
            </label>

            <p className="text-sm text-gray-500 mb-3">
              This is a private, judgment-free space. You don’t
              have to write perfectly — just honestly.
            </p>

            <textarea
              className="w-full h-44 p-4 rounded-lg border border-purple-200
              focus:outline-none focus:ring-2 focus:ring-purple-400
              bg-purple-50 text-gray-800"
              placeholder="You don't have to be perfect. Just be honest."
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

            <p className="text-xs text-gray-400 mt-2 text-center">
              You can edit or delete entries anytime.
            </p>
          </section>

          {/* ---------------- ENTRIES ---------------- */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Your Entries
            </h2>

            {entries.length === 0 ? (
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-gray-700">
                <p className="mb-2">
                  There’s nothing here yet — and that’s okay.
                </p>
                <p className="text-sm text-gray-600">
                  Writing even one sentence can help clear
                  your mind.
                </p>
              </div>
            ) : (
              <ul className="space-y-4">
                {entries
                  .slice()
                  .reverse()
                  .map((item) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-white shadow rounded-lg border border-purple-200"
                    >
                      {editingId === item.id ? (
                        <>
                          <textarea
                            className="w-full p-3 border rounded"
                            value={editingText}
                            onChange={(e) =>
                              setEditingText(e.target.value)
                            }
                          />

                          <div className="flex gap-4 mt-2 text-sm">
                            <button
                              onClick={saveEdit}
                              className="text-purple-600 hover:underline"
                            >
                              Save
                            </button>
                            <button
                              onClick={() =>
                                setEditingId(null)
                              }
                              className="text-gray-500 hover:underline"
                            >
                              Cancel
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="whitespace-pre-wrap text-gray-800">
                            {item.text}
                          </p>

                          <p className="text-xs text-gray-500 mt-2">
                            {new Date(
                              item.date
                            ).toLocaleString()}
                          </p>

                          <div className="flex gap-4 mt-3 text-sm">
                            <button
                              onClick={() =>
                                startEdit(item)
                              }
                              className="text-purple-600 hover:underline"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() =>
                                deleteEntry(item.id)
                              }
                              className="text-red-500 hover:underline"
                            >
                              Delete
                            </button>
                          </div>
                        </>
                      )}
                    </motion.li>
                  ))}
              </ul>
            )}
          </section>
        </main>

        {/* ---------------- ASIDE ---------------- */}
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
              Days you’ve shown up for yourself
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-medium mb-2">
              Why consistency matters
            </h4>
            <p className="text-sm text-gray-600">
              Small daily reflections build emotional awareness
              over time — progress doesn’t need perfection.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default JournalPage;
