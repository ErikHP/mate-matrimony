import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { HowItWorks } from "@/components/home/HowItWorks";
import { SuccessStories } from "@/components/home/SuccessStories";
import { Events } from "@/components/home/Events";
import { CTA } from "@/components/home/CTA";
import { EmailSubscriptionModal } from "@/components/home/EmailSubscriptionModal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <SuccessStories />
      <Events />
      <CTA />
      <Footer />
      <EmailSubscriptionModal />
    </div>
  );
}