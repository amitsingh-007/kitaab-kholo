import { Container } from "@mantine/core";
import { Inter } from "next/font/google";
import { Faq } from "../../ui/components/Faq";
import HeroText from "../../ui/components/HeroSection";
import StatsRing from "../../ui/components/Stats";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroText />
      <Container>
        <StatsRing />
        <Faq />
      </Container>
    </>
  );
}
