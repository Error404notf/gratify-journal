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

import LandingPage from "./pages/LandingPage";
import JournalPage from "./pages/JournalPage";
// import AffirmationsPage from "./pages/AffirmationsPage";
import SavedAffirmationsPage from "./pages/SavedAffirmationsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AuthPage from "./pages/AuthPage";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/auth" element={<AuthPage />} />


        <Route
          path="/journal"
          element={
            <ProtectedRoute>
              <JournalPage />
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/affirmations"
          element={
            <ProtectedRoute>
              <AffirmationsPage />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/saved-affirmations"
          element={
            <ProtectedRoute>
              <SavedAffirmationsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
