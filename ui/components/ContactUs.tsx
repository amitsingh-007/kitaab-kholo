import {
  Button,
  Group,
  Paper,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import contactUsSvg from "../svg/contact-us.svg";
import { ContactIconsList } from "./ContactIcons";
import styles from "./styles/ContactUs.module.css";

export function ContactUs({ close }: { close: () => void }) {
  return (
    <Paper shadow="md" radius="lg">
      <div className={styles.wrapper}>
        <div
          className={styles.contacts}
          style={{ backgroundImage: `url(${contactUsSvg.src})` }}
        >
          <Text fz="lg" fw={700} className={styles.title} c="#fff">
            Contact information
          </Text>
          <ContactIconsList variant="white" />
        </div>

        <form
          className={styles.form}
          onSubmit={(event) => {
            event.preventDefault();
            close();
          }}
        >
          <Text fz="lg" fw={700} className={styles.title}>
            Get in touch
          </Text>

          <div className={styles.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput
                label="Your email"
                placeholder="kitaabkholo@gmail.com"
                required
              />
            </SimpleGrid>

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
              classNames={{
                input: styles.textArea,
              }}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={styles.control}>
                Submit
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
