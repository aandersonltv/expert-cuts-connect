import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Hero/HeroSection";
import AboutSection from "@/components/About/AboutSection";
import ImageGallery from "@/components/Gallery/ImageGallery";
import TestimonialsSection from "@/components/Testimonials/TestimonialsSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ImageGallery />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Home;