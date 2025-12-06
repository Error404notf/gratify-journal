import { BrowserRouter as Router, Routes, Route  } from "react-router"
import LandingPage from "./pages/LandingPage"
import JournalPage from "./pages/JournalPage"
import AffirmationsPage from "./pages/AffirmationsPage"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/affirmations" element={<AffirmationsPage />} />
      </Routes>
    </Router>
  );
}
export default App