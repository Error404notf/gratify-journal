import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

function HomePage() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "friend";

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-indigo-50">
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        {/* Welcome */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-700 mb-2">
            Welcome back, {userName} 🌿
          </h1>
          <p className="text-gray-600 text-lg">
            Take a breath. You’re exactly where you need to be.
          </p>
        </section>

        {/* About Gratify */}
        <section className="bg-white rounded-xl shadow p-8 mb-10 border border-purple-100">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            What is Gratify Journal?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Gratify Journal is a gentle digital space created to help you slow
            down, reflect, and reconnect with yourself through journaling and
            daily affirmations.
          </p>

          <p className="text-gray-700 leading-relaxed">
            There is no pressure to write perfectly. Showing up — even for a
            few words — is enough.
          </p>
        </section>

        {/* Why journaling */}
        <section className="bg-white rounded-xl shadow p-8 mb-10 border border-purple-100">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Why journaling matters
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>🧠 Helps clear mental clutter and anxious thoughts</li>
            <li>💜 Encourages emotional awareness and self-compassion</li>
            <li>🕊️ Creates a safe outlet for unfiltered expression</li>
            <li>🔥 Builds consistency through small, daily habits</li>
          </ul>
        </section>

        {/* Actions */}
        <section className="flex flex-col md:flex-row gap-6 justify-center">
          <button
            onClick={() => navigate("/journal")}
            className="bg-purple-600 text-white px-8 py-4 rounded-lg font-medium
              hover:bg-purple-700 transition active:scale-95"
          >
            Start Journaling ✍🏽
          </button>

          <button
            onClick={() => navigate("/saved-affirmations")}
            className="bg-white border border-purple-300 text-purple-700 px-8 py-4 rounded-lg
              font-medium hover:bg-purple-50 transition active:scale-95"
          >
            View Saved Affirmations 💜
          </button>
        </section>
      </motion.main>
    </div>
  );
}

export default HomePage;
