import AboutPages from "./components/pages/AboutPages";
import ContactMe from "./components/pages/ContactMe";
import EdunExpPages from "./components/pages/EdunExpPages";
import HomePage from "./components/pages/HomePage";
import ProjectPages from "./components/pages/ProjectPages";
import ServicesPages from "./components/pages/ServicesPage";

function App() {
  return (
    <>
      <HomePage />
      <ServicesPages />
      <AboutPages />
      <EdunExpPages />
      <ProjectPages />
      <ContactMe />
    </>
  );
}

export default App;
