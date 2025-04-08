import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Location from "./pages/Location";
import AuthModal from "./components/AuthModal";

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openLoginModal = () => {
    setIsLogin(true);
    setShowAuthModal(true);
  };

  const closeModal = () => setShowAuthModal(false);

  return (
    <Router>
      <div>
        <Navbar onLoginClick={openLoginModal} />
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
          />
        )}
      </div>
    </Router>
  );
}

export default App;
