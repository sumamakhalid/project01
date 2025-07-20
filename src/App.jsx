import Header from "./Header";
import ProfessionalSummary from "./ProfessionalSummary";
import Experience from "./Experience";
import experiences from "./js/data.js";
import Footer from "./Footer";
import Contact from "./Contact.jsx";

const App = () => {
  return (
    <>
      <Header />
      <ProfessionalSummary />
      <Experience experience={experiences} />
      <Contact />
      <Footer />
    </>
  );
};

export default App;