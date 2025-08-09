

import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import PricingSection from '../components/sections/PricingSection';
import TestimonialsCarousel from '../components/sections/TestimonialsCarousel';
import FAQSection from '../components/sections/FAQSection';
import ContactForm from '../components/sections/ContactForm';
import Footer from '../components/sections/Footer';
import ScrollIndicator from '../components/ui/ScrollIndicator';
import { Metadata } from 'next';
// In src/index.js or src/App.js
import './globals.css';
import '../styles/layout.css'; // Adjust path if needed




export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - AI-Powered Marketing Platform',
  description: 'Transform your marketing strategy with our AI-powered suite of tools',
};

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Smooth scrolling navigation indicator */}
      <ScrollIndicator />

      {/* Main sections with scroll-triggered animations */}
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsCarousel />
      <FAQSection />
      <ContactForm />
      <Footer />

      {/* Glassmorphism background elements */}
      <div className="fixed -z-10 inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20 mix-blend-multiply animate-blob"></div>
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl opacity-20 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>
    </main>
  );
}