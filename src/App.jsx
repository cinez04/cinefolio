import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./styles/global.css";

// Layout Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Page Components
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import ProjectDetail from "./components/Projects/ProjectDetail"; 

const HomePage = () => (
  <>
    <Hero />
    <Experience />
    <Projects />
    <Achievements />
    <Contact />
  </>
);

const AppContent = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/project/");

  return (
    <>
      {!isProjectPage && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      {!isProjectPage && <Footer />}
    </>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
