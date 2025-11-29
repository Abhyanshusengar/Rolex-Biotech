import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import HeroNew from "@/components/HeroNew";
import CategoriesNew from "@/components/CategoriesNew";
import AboutStats from "@/components/AboutStats";
import ProductShowcase from "@/components/ProductShowcase";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTANewsletter from "@/components/CTANewsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <HeroNew />
      <CategoriesNew />
      <AboutStats />
      <ProductShowcase />
      <Features />
      <FAQ />
      <Testimonials />
      <CTANewsletter />
      <Footer />
    </div>
  );
};

export default Index;
