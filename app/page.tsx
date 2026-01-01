import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GitHubGraph from "@/components/GitHubGraph";
import ProjectsSection from "@/components/ProjectsSection";
import LatestArticlesSection from "@/components/LatestArticlesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FixedInput from "@/components/FixedInput";
import { AnimatedSection } from "@/components/animated-section";

export default function Page() {
  return (
    <div className="space-y-5">
      <Header />
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection delay={400}>
        <GitHubGraph />
      </AnimatedSection>
      <AnimatedSection delay={600}>
        <ProjectsSection />
      </AnimatedSection>
      <AnimatedSection delay={800}>
        <LatestArticlesSection />
      </AnimatedSection>
      <AnimatedSection delay={1000}>
        <ContactSection />
      </AnimatedSection>
      <AnimatedSection delay={1200}>
        <Footer />
      </AnimatedSection>
      <FixedInput />
    </div>
  );
}
