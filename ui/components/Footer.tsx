import {
  Box,
  Container,
  Group,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import Image from "next/image";
import LogoDarkSmall from "../../public/logo-dark-small.png";
import LogoLightSmall from "../../public/logo-light-small.png";
import styles from "./styles/Footer.module.css";

export function Footer() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <div className={styles.footer}>
      <Container className={styles.inner}>
        <Box w={90} h={40} style={{ overflow: "hidden" }}>
          <Image
            src={colorScheme === "light" ? LogoLightSmall : LogoDarkSmall}
            alt="Kitaab Kholo"
            style={{
              width: "inherit",
              height: "inherit",
              objectFit: "contain",
              transform: "scale(3)",
            }}
          />
        </Box>
        <Group className={styles.links}>
          <Text c="dimmed" size="sm">
            © 2023 Kitaab Kholo. All rights reserved.
          </Text>
        </Group>
      </Container>
    </div>
  );
}
