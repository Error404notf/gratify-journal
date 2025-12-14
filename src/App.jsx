import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";

import LandingPage from "./pages/LandingPage";
import JournalPage from "./pages/JournalPage";
import SavedAffirmationsPage from "./pages/SavedAffirmationsPage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/journal" element={<JournalPage />} />
  
        <Route path="/saved-affirmations" element={<SavedAffirmationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
