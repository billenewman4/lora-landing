import {
  Header,
  Hero,
  ResultsMetrics,
  Features,
  ImplementationTimeline,
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
        <SocialProof />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
