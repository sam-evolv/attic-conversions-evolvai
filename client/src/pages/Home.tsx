import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { SocialProofTicker } from "@/components/home/SocialProofTicker";
import { IntroSection } from "@/components/home/IntroSection";
import { StatsBar } from "@/components/home/StatsBar";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { ReferralSection } from "@/components/home/ReferralSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <Layout heroPage>
      <Hero />
      <SocialProofTicker />
      <IntroSection />
      <StatsBar />
      <TestimonialSection />
      <ReferralSection />
      <CTASection />
    </Layout>
  );
}
