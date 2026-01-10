import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TrustBar />
      <IntroSection />
      <TestimonialSection />
      <CTASection />
    </Layout>
  );
}
