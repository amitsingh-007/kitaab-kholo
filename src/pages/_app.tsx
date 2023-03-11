import {
  ActionIcon,
  Box,
  ColorScheme,
  ColorSchemeProvider,
  Flex,
  MantineProvider,
  Text,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Footer } from "../../ui/components/Footer";
import { Header } from "../../ui/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const [hideOfferBanner, setHideBanner] = useLocalStorage<"true" | "false">({
    key: "hide-offer-banner",
    defaultValue: "false",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            cursorType: "pointer",
            fontFamily: "Google Sans",
            headings: {
              fontFamily: "Google Sans",
            },
            globalStyles: (theme) => ({
              "#__next": {
                display: "flex",
                "flex-direction": "column",
                "min-height": "100vh",
              },
            }),
          }}
        >
          <Head>
            <title>Kitaab Kholo</title>
            <meta name="description" content="Kitaab Kholo" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {hideOfferBanner === "false" && (
            <Flex pl={16} pr={10} pt={5} justify="space-between">
              <Text>Get ₹100 off on first order</Text>
              <ActionIcon
                variant="subtle"
                onClick={() => setHideBanner("true")}
              >
                <IconX size="1rem" />
              </ActionIcon>
            </Flex>
          )}
          <Header links={[]} />
          <Box sx={{ flex: 1 }}>
            <Component {...pageProps} />
          </Box>
          <Footer />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
