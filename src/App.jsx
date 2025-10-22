import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import RecruiterPage from "./pages/RecruiterPage";
import CandidatePage from "./pages/CandidatePage";

const App = () => {
  const location = useLocation();

  // ✅ Define routes where layout should be hidden
  const hideLayoutRoutes = ["/login", "/signup", "/"];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/RecruiterDashboard" element={<RecruiterPage />} />
        <Route path="/CandidateDashboard" element={<CandidatePage />} />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </>
  );
};

export default App;
