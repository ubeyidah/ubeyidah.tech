import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FixedInput from "@/components/FixedInput";
import { AnimatedSection } from "@/components/animated-section";

export default function Blog() {
  return (
    <div className="space-y-5">
      <Header />
      <div className="flex items-center justify-center min-h-[80vh]">
        <AnimatedSection>
          <div className="text-center">
            <h1 className="text-8xl font-black text-muted-foreground/30 rotate-2">
              Writing in Progress
            </h1>
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection delay={200}>
        <Footer />
      </AnimatedSection>
      <FixedInput />
    </div>
  );
}
