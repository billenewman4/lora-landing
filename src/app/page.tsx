import {
  Header,
  Hero,
  ResultsMetrics,
  Features,
  ImplementationTimeline,
  IntegrationShowcase,
  SocialProof,
  FAQ,
  CTA,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ResultsMetrics />
        <Features />
        <ImplementationTimeline />
        <IntegrationShowcase />
        <SocialProof />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
