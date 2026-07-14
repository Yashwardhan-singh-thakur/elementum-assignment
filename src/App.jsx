import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import TomorrowSection from "./sections/TomorrowSection";
import ProgressSection from "./sections/ProgressSection";
import ServicesSection from "./sections/ServicesSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import NewsletterSection from "./sections/NewsletterSection";
import Footer from "./sections/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <TomorrowSection />
        <ProgressSection />
        <ServicesSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
