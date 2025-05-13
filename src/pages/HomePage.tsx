
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ProductsSection from '../components/home/ProductsSection';
import WhyUsSection from '../components/home/WhyUsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import InteractiveQuizSection from '../components/home/InteractiveQuizSection';
import VisionSection from '../components/home/VisionSection';
import FinalCTA from '../components/home/FinalCTA';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <InteractiveQuizSection />
      <VisionSection />
      <FinalCTA />
    </div>
  );
};

export default HomePage;
