import {
  Autocomplete,
  Box,
  Burger,
  Flex,
  Group,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPhone, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import LogoDarkSmall from "../../public/logo-dark-small.png";
import LogoLightSmall from "../../public/logo-light-small.png";
import ThemeToggle from "./ThemeToggle";
import styles from "./styles/Header.module.css";

export function Header() {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box component="header" className={styles.container} mb={20}>
      <div className={styles.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" />
          <Box w={150} h={54} style={{ overflow: "hidden" }}>
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
          <Group className={styles.leftGroup}>
            <Flex align="center" justify="center" gap={4}>
              <IconPhone size="1.2rem" stroke={1.5} />
              <Text>991194XXXX</Text>
            </Flex>
          </Group>
        </Group>
        <Group>
          <ThemeToggle />
          <Autocomplete
            visibleFrom="md"
            placeholder="Search"
            leftSection={<IconSearch size="1rem" stroke={1.5} />}
            data={[
              "Cheapest IIT-JEE books",
              "Class 12th books",
              "Second hand books",
              "Top 5 best sellers",
            ]}
          />
        </Group>
      </div>
    </Box>
  );
}
