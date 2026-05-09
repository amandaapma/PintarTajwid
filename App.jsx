import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Belajar from "./pages/Belajar";
import DetailMateri from "./pages/DetailMateri";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  // State management: menyimpan progres belajar tiap materi
  const [progres, setProgres] = useState({});

  const toggleProgres = (id, status) => {
    setProgres((prev) => ({ ...prev, [id]: status }));
  };

  return (
    <Router>
      <Navbar progres={progres} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/belajar"
          element={<Belajar progres={progres} toggleProgres={toggleProgres} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/materi/:id" element={<DetailMateri progres={progres} toggleProgres={toggleProgres} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;