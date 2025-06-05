import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Location from "./pages/Location";
import AuthModal from "./components/AuthModal";
import LoadingSpinner from "./components/LoadingSpinner";
import AuthDebug from "./components/AuthDebug";
import useAuth from "./hooks/useAuth";

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  // Custom auth hook
  const { isAuthenticated, user, logout, isLoading } = useAuth();

  console.log("App render - Auth state:", { isAuthenticated, user, isLoading });

  const openLoginModal = () => {
    setIsLogin(true);
    setShowAuthModal(true);
  };

  const closeModal = () => setShowAuthModal(false);

  const handleLoginSuccess = () => {
    console.log("Login success callback triggered");
    setShowAuthModal(false);
  };

  // Show loading spinner during auth initialization
  if (isLoading) {
    return <LoadingSpinner text="Initializing..." />;
  }

  return (
    <Router>
      <div>
        <Navbar
          onLoginClick={openLoginModal}
          isAuthenticated={isAuthenticated}
          user={user}
          onLogout={logout}
        />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
        </Routes>
        {showAuthModal && (
          <AuthModal
            isLogin={isLogin}
            toggleForm={() => setIsLogin(!isLogin)}
            closeModal={closeModal}
            onLoginSuccess={handleLoginSuccess}
          />
        )}
        <AuthDebug />
      </div>
    </Router>
  );
}

export default App;
