import Head from "next/head";
import { Inter } from "next/font/google";
import { Header } from "../../ui/components/Header";
import StatsRing from "../../ui/components/Stats";
import { ActionIcon, Box, Container, Flex, Text } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";
import HeroText from "../../ui/components/HeroSection";
import { Footer } from "../../ui/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [hideOfferBanner, setHideBanner] = useLocalStorage<"true" | "false">({
    key: "hide-offer-banner",
    defaultValue: "false",
    getInitialValueInEffect: true,
  });

  return (
    <>
      <Head>
        <title>Kitaab Kholo</title>
        <meta name="description" content="Kitaab Kholo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {hideOfferBanner === "false" && (
        <Flex pl={16} pr={10} pt={5} justify="space-between">
          <Text>Get ₹100 off on first order</Text>
          <ActionIcon variant="subtle" onClick={() => setHideBanner("true")}>
            <IconX size="1rem" />
          </ActionIcon>
        </Flex>
      )}
      <Header links={[]} />
      <HeroText />
      <Container>
        <StatsRing />
      </Container>
      <Footer />
    </>
  );
}
