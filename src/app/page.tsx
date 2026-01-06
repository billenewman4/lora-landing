import {
  Header,
  Hero,
  Features,
  HowItWorks,
  SocialProof,
  CTA,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
