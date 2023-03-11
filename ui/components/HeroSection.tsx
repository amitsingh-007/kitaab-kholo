import {
  Button,
  Container,
  createStyles,
  Group,
  Image,
  List,
  Modal,
  ModalBaseSettings,
  rem,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCheck } from "@tabler/icons-react";
import { useRouter } from "next/router";
import usePlatform from "../hooks/usePlatform";
import image from "../svg/hero.svg";
import { ContactUs } from "./ContactUs";
import { Dots } from "./Dots";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(60),
    paddingBottom: rem(80),

    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(40),
      paddingBottom: rem(60),
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

function HeroText() {
  const { classes } = useStyles();
  const isMobile = usePlatform();
  const [showContactForm, { open: openContactForm, close: closeContactForm }] =
    useDisclosure(false);
  const router = useRouter();

  const modalStyles: ModalBaseSettings["styles"] = {
    content: { borderRadius: "1rem" },
  };
  if (isMobile) {
    modalStyles.body = {
      padding: 0,
    };
  }

  return (
    <>
      <div className={classes.wrapper}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
        <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                Find your second hand
                <span className={classes.highlight}>book oasis</span> with
                Kitaab Kholo.
              </Title>
              <Text color="dimmed" mt="md">
                Your one-stop-shop for second hand books. Order online or call
                us to order directly with us without any hassle.
              </Text>
              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>Affordable price</b>
                </List.Item>
                <List.Item>
                  <b>Hassle-Free Ordering Process</b>
                </List.Item>
                <List.Item>
                  <b>Unique curated collection</b>
                </List.Item>
              </List>

              <Group mt={30}>
                <Button
                  radius="xl"
                  size="md"
                  className={classes.control}
                  onClick={openContactForm}
                >
                  Contact Us
                </Button>
                <Button
                  variant="default"
                  radius="xl"
                  size="md"
                  className={classes.control}
                  onClick={() => router.push("/auth/login")}
                >
                  Login
                </Button>
              </Group>
            </div>
            <Image
              src={image.src}
              className={classes.image}
              alt="Kitaab Kholo Hero Image"
            />
          </div>
        </Container>
      </div>
      <Modal
        opened={showContactForm}
        onClose={closeContactForm}
        centered
        withCloseButton={false}
        size="xl"
        styles={modalStyles}
      >
        <ContactUs close={closeContactForm} />
      </Modal>
    </>
  );
}

export default HeroText;
