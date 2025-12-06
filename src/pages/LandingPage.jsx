import { Link } from "react-router";
function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-100">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to Gratify
      </h1>
      <div className="flex flex-col gap-4">
        <Link
          to="/journal"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg text-center hover:bg-purple-700"
        >
          Go to Journal
        </Link>

        <Link
          to="/affirmations"
          className="px-6 py-3 bg-green-600 text-white rounded-lg text-center hover:bg-green-700"
        >
          Daily Affirmations
        </Link>
      </div>
      <p className="text-center text-gray-600 mt-4">
        Your daily space for gratitude & positive affirmations.
      </p>
    </div>
  );
}

export default LandingPage;
