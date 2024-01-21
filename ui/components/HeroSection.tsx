import {
  Button,
  Container,
  Group,
  Image,
  List,
  Modal,
  rem,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCheck } from "@tabler/icons-react";
import { useRouter } from "next/router";
import image from "../svg/hero.svg";
import { ContactUs } from "./ContactUs";
import { Dots } from "./Dots";
import styles from "./styles/HeroSection.module.css";

function HeroSection() {
  const [showContactForm, { open: openContactForm, close: closeContactForm }] =
    useDisclosure(false);
  const router = useRouter();

  return (
    <>
      <div className={styles.wrapper}>
        <Dots className={styles.dots} style={{ left: 0, top: 0 }} />
        <Dots className={styles.dots} style={{ left: 60, top: 0 }} />
        <Dots className={styles.dots} style={{ left: 0, top: 140 }} />
        <Dots className={styles.dots} style={{ right: 0, top: 60 }} />
        <Container>
          <div className={styles.inner}>
            <div className={styles.content}>
              <Title className={styles.title}>
                Find your second hand
                <span className={styles.highlight}>book oasis</span> with Kitaab
                Kholo.
              </Title>
              <Text c="dimmed" mt="md">
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
                  className={styles.control}
                  onClick={openContactForm}
                >
                  Contact Us
                </Button>
                <Button
                  variant="default"
                  radius="xl"
                  size="md"
                  className={styles.control}
                  onClick={() => router.push("/auth/login")}
                >
                  Login
                </Button>
              </Group>
            </div>
            <Image
              src={image.src}
              className={styles.image}
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
        classNames={{
          body: styles.modalBody,
          content: styles.modalContent,
        }}
      >
        <ContactUs close={closeContactForm} />
      </Modal>
    </>
  );
}

export default HeroSection;
