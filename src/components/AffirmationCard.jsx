import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    "You are allowed to slow down.",
    "Today is enough — you are enough.",
  ];

  const getToday = () => new Date().toISOString().split("T")[0];

  const getRandomAffirmation = () => {
    const index = Math.floor(Math.random() * affirmations.length);
    return affirmations[index];
  };

  const [affirmation, setAffirmation] = useState("");

  useEffect(() => {
    const storedDate = localStorage.getItem("affirmationDate");
    const storedAffirmation = localStorage.getItem("dailyAffirmation");
    const today = getToday();

    if (storedDate === today && storedAffirmation) {
      setAffirmation(storedAffirmation);
    } else {
      const newAffirmation = getRandomAffirmation();
      setAffirmation(newAffirmation);
      localStorage.setItem("affirmationDate", today);
      localStorage.setItem("dailyAffirmation", newAffirmation);
    }
  }, []);

  const handleSave = () => {
    const saved =
      JSON.parse(localStorage.getItem("savedAffirmations")) || [];

    if (!saved.includes(affirmation)) {
      saved.push(affirmation);
      localStorage.setItem(
        "savedAffirmations",
        JSON.stringify(saved)
      );
      alert("Saved -- you can revisit this anytime 💜");
    } else {
      alert("Already saved ✨");
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    className="bg-white p-4 rounded-lg shadow"
  >
      <h3 className="text-lg font-semibold mb-2">
        Today&apos;s Affirmation
      </h3>

      <p  className="text-purple-700 italic text-base leading-relaxed">
        "{affirmation}"
      </p>

      <button
        onClick={handleSave}
        className="mt-4 w-full border py-2 rounded hover:bg-gray-100 transition"
      >
        Save
      </button>
      <a
  href="/saved-affirmations"
  className="block mt-3 text-sm text-center text-purple-600 hover:underline"
>
  View saved affirmations →
</a>

      </motion.div>
  );
}
