import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { FeaturedProjectsSection } from '@/components/FeaturedProjectsSection';
import { MoreProjectsSection } from '@/components/MoreProjectsSection';
import { MethodologySection } from '@/components/MethodologySection';
import { CareerSection } from '@/components/CareerSection';
import { EducationSection } from '@/components/EducationSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { SEOHead } from '@/components/SEOHead';

const Index = () => {
  return (
    <>
      <SEOHead />
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <FeaturedProjectsSection />
        <MoreProjectsSection />
        <MethodologySection />
        <CareerSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Index;
