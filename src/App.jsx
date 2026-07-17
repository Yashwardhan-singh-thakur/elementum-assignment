import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import PinkLine from "./components/PinkLine";
import ServicesSection from "./sections/ServicesSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import NewsletterSection from "./sections/NewsletterSection";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Header />

      <main className="pt-[72px] lg:pt-[56px]">
        <HeroSection />
        <PinkLine />
        <ServicesSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
