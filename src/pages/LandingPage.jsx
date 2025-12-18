import { Link } from "react-router";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-indigo-50">
      <Navbar />

      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center px-6 pt-20 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-purple-700 mb-4"
        >
          Gratify
        </motion.h1>

        <p className="text-lg text-gray-600 mb-6">
          A gentle journaling space designed to help you slow down,
          reflect, and build emotional consistency — one day at a time.
        </p>

        <Link
          to="/journal"
          className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg
          font-medium hover:bg-purple-700 transition"
        >
          Start Journaling 🌿
        </Link>
      </section>

      {/* WHY GRATIFY */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Why Gratify?
        </h2>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          Many people want to journal for their mental well-being,
          but feel overwhelmed by perfection, long prompts, or
          complicated apps. Gratify removes that pressure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow border border-purple-100">
            <h3 className="font-semibold text-lg mb-2 text-purple-700">
              🌱 Simple & Human
            </h3>
            <p className="text-sm text-gray-600">
              Gratify encourages honest, imperfect writing.
              You don’t need the right words — just presence.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-purple-100">
            <h3 className="font-semibold text-lg mb-2 text-purple-700">
              🔥 Consistency over perfection
            </h3>
            <p className="text-sm text-gray-600">
              Daily streaks gently motivate you to show up
              for yourself, without guilt or pressure.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-purple-100">
            <h3 className="font-semibold text-lg mb-2 text-purple-700">
              💜 Mental wellness focused
            </h3>
            <p className="text-sm text-gray-600">
              Combined with affirmations, Gratify helps users
              build emotional awareness and self-compassion.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">✍🏽</div>
              <p className="font-medium">Write freely</p>
              <p className="text-sm text-gray-600">
                Capture your thoughts without judgment.
              </p>
            </div>

            <div>
              <div className="text-2xl mb-2">📝</div>
              <p className="font-medium">Edit anytime</p>
              <p className="text-sm text-gray-600">
                Reflect and revise as you grow.
              </p>
            </div>

            <div>
              <div className="text-2xl mb-2">🔥</div>
              <p className="font-medium">Build a streak</p>
              <p className="text-sm text-gray-600">
                Stay consistent with gentle motivation.
              </p>
            </div>

            <div>
              <div className="text-2xl mb-2">💬</div>
              <p className="font-medium">Daily affirmations</p>
              <p className="text-sm text-gray-600">
                Support your mindset with positivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6">
        <h2 className="text-2xl font-semibold mb-4">
          You don’t need to have it all figured out.
        </h2>
        <p className="text-gray-600 mb-6">
          Just start where you are.
        </p>

        <Link
          to="/journal"
          className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg
          font-medium hover:bg-purple-700 transition"
        >
          Begin your reflection 🌿
        </Link>
      </section>
    </div>
  );
}

export default LandingPage;
