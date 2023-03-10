import {
  Autocomplete,
  Box,
  Burger,
  createStyles,
  Group,
  Header as HeaderBar,
  rem,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPhone, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import LogoDarkSmall from "../../public/logo-dark-small.png";
import LogoLightSmall from "../../public/logo-light-small.png";
import { getMediaQuery } from "../utils/mediaQuery";
import SwitchToggle from "./ThemeToggle";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: rem(56),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

interface Props {
  links: { link: string; label: string }[];
}

export function Header({ links }: Props) {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <HeaderBar height={56} className={classes.header} mb={20}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" />
          <Box w={150} h={54} sx={{ overflow: "hidden" }}>
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
          <Group
            sx={(theme) =>
              getMediaQuery(theme, { display: ["none", "flex"], gap: [0, 4] })
            }
          >
            <IconPhone size="1.2rem" stroke={1.5} />
            <Text>9911947060</Text>
          </Group>
        </Group>
        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
          </Group>
          <SwitchToggle />
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size="1rem" stroke={1.5} />}
            data={[
              "Cheapest IIT-JEE books",
              "Class 12th books",
              "Second hand books",
              "Top 5 best sellers",
            ]}
          />
        </Group>
      </div>
    </HeaderBar>
  );
}
