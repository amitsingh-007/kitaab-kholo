import {
  createStyles,
  Container,
  Group,
  Anchor,
  rem,
  Box,
  useMantineColorScheme,
  Text,
} from "@mantine/core";
import Image from "next/image";
import LogoDarkSmall from "../../public/logo-dark-small.png";
import LogoLightSmall from "../../public/logo-light-small.png";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { colorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Box w={90} h={40} sx={{ overflow: "hidden" }}>
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
        <Group className={classes.links}>
          <Text color="dimmed" size="sm">
            © 2023 Kitaab Kholo. All rights reserved.
          </Text>
        </Group>
      </Container>
    </div>
  );
}
