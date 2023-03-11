import {
  Button,
  Container,
  createStyles,
  Image,
  rem,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useRouter } from "next/router";
import notFound from "../../../ui/svg/not-found.svg";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(0),
      paddingBottom: rem(0),
    },
  },

  title: {
    fontWeight: 900,
    fontSize: rem(34),
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(32),
    },
  },

  control: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  mobileImage: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  desktopImage: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function NotFoundImage() {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
      >
        <Image
          src={notFound.src}
          className={classes.mobileImage}
          alt="Not Found"
        />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            className={classes.control}
            onClick={() => router.push("/")}
          >
            Get back to home page
          </Button>
        </div>
        <Image src={notFound.src} className={classes.desktopImage} alt="404" />
      </SimpleGrid>
    </Container>
  );
}
