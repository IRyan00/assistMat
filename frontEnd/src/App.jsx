import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import Reviews from "./pages/Reviews.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import ProtectedRoute from "./utils/ProtectDashboard.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
              <Dashboard />
              <ProtectedRoute />
              </ProtectedRoute>
              }
              /> */}

          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
