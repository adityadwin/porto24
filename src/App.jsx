import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ServicesPages from "./components/pages/ServicesPage";
import AboutPages from "./components/pages/AboutPages";
import EdunExpPages from "./components/pages/EdunExpPages";
import ProjectPages from "./components/pages/ProjectPages";
import ContactMe from "./components/pages/ContactMe";
import AllProjects from "./components/pages/AllProjects";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman utama menggabungkan semua komponen */}
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <ServicesPages />
              <AboutPages />
              <EdunExpPages />
              <ProjectPages />
              <ContactMe />
              <Footer />
            </>
          }
        />
        {/* Halaman terpisah untuk All Projects */}
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
