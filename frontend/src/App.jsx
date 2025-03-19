import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./pages/Menu";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
