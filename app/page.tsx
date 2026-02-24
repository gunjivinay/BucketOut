import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ForPosters from "@/components/ForPosters";
import ForTaskers from "@/components/ForTaskers";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PaymentsRewards from "@/components/PaymentsRewards";
import Subhero from "@/components/Subhero";
import TrustSafety from "@/components/TrustSafety";
import WhyBucketOut from "@/components/WhyBucketOut";

export default function Home() {
  return (
    <main className="pt-16">
      <Header />
      <Hero />
      <Subhero />
      <WhyBucketOut />
      <ForPosters />
      <ForTaskers />
      <PaymentsRewards />
      <TrustSafety />
      <HowItWorks />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  );
}
