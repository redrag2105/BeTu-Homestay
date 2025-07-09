import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingContactButtons from "./components/ui/FloatingContactButtons";
import Home from "./pages/Home";

function App() {
  const handleSectionChange = ( _section:string, scrollToElement?: string) => {
    // Navigate to section with smooth scrolling
    if (scrollToElement) {
      setTimeout(() => {
        const element = document.getElementById(scrollToElement);
        if (element) {
          const navbarHeight = 80; // Account for fixed navbar
          const elementPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        } else {
          console.log("Element not found with id:", scrollToElement); 
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onSectionChange={handleSectionChange} />

      <main>
        <Home onSectionChange={handleSectionChange} />
      </main>

      <Footer />

      <FloatingContactButtons />
    </div>
  );
}

export default App;
