import {
  ActionIcon,
  Box,
  Flex,
  MantineProvider,
  Text,
  createTheme,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { useLocalStorage } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Footer } from "../../ui/components/Footer";
import { Header } from "../../ui/components/Header";
import "../../ui/styles/global.css";

const theme = createTheme({
  cursorType: "pointer",
  fontFamily: "Google Sans",
  headings: {
    fontFamily: "Google Sans",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const [hideOfferBanner, setHideBanner] = useLocalStorage<"true" | "false">({
    key: "hide-offer-banner",
    defaultValue: "false",
    getInitialValueInEffect: true,
  });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
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
        <Header />
        <Box style={{ flex: 1 }}>
          <Component {...pageProps} />
        </Box>
        <Footer />
      </MantineProvider>
    </>
  );
}
