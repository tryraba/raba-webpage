import Header from "@/components/header";
import Hero from "@/components/hero";
import Content from "@/components/content";
import VoiceFeaturesSection from "@/components/features";
import LanguageSelectorSection from "@/components/comingsoon";
import FooterCTASection from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Content />
      <VoiceFeaturesSection />
      <LanguageSelectorSection />
      <FooterCTASection />
    </>
  );
}
