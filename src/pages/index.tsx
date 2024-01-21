import { Container } from "@mantine/core";
import { Faq } from "../../ui/components/Faq";
import HeroSection from "../../ui/components/HeroSection";
import StatsRing from "../../ui/components/Stats";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Container>
        <StatsRing />
        <Faq />
      </Container>
    </>
  );
}
