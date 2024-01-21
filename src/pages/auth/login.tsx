import {
  Button,
  Container,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useRouter } from "next/router";
import styles from "../../../ui/styles/login.module.css";
import notFound from "../../../ui/svg/not-found.svg";

export default function NotFoundImage() {
  const router = useRouter();

  return (
    <Container className={styles.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image src={notFound.src} className={styles.mobileImage} alt="404" />
        <div>
          <Title className={styles.title}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            className={styles.control}
            onClick={() => router.push("/")}
          >
            Get back to home page
          </Button>
        </div>
        <Image src={notFound.src} className={styles.desktopImage} alt="404" />
      </SimpleGrid>
    </Container>
  );
}
