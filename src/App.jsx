// import { BrowserRouter as Router, Routes, Route } from "react-router";
// import Navbar from "./components/Navbar";

// import LandingPage from "./pages/LandingPage";
// import JournalPage from "./pages/JournalPage";
// import SavedAffirmationsPage from "./pages/SavedAffirmationsPage";

// function App() {
//   return (
//     <Router>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/journal" element={<JournalPage />} />
  
//         <Route path="/saved-affirmations" element={<SavedAffirmationsPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router";
import { AuthProvider } from "./context/AuthContext";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import JournalPage from "./pages/JournalPage";

import SavedAffirmationsPage from "./pages/SavedAffirmationsPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/journal"
            element={
              <ProtectedRoute>
                <JournalPage />
              </ProtectedRoute>
            }
          />

          <Route path="/saved-affirmations" element={<SavedAffirmationsPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

