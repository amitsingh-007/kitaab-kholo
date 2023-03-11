import {
  createStyles,
  Image,
  Accordion,
  Grid,
  Col,
  Container,
  Title,
} from "@mantine/core";
import image from "../svg/faq.svg";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  item: {
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
  },
}));

const faqs: { ques: string; ans: string; id: string }[] = [
  {
    ques: "Are all the books on the platform used?",
    ans: "Yes, all the books sold on Kitaab Kholo are second-hand, but we ensure that they are in good condition. In future, we will selling new books also.",
    id: "1",
  },
  {
    ques: "Is there a minimum order amount?",
    ans: "No, there is no minimum order amount. However, we offer free shipping for orders above ₹999.",
    id: "2",
  },
  {
    ques: "What if I receive a damaged book?",
    ans: "We have a return and exchange policy in place for damaged or defective books. Please contact us within 3 days of receiving your order, and we will assist you with the return or exchange process.",
    id: "3",
  },
  {
    ques: "Can I sell my old books to Kitaab Kholo?",
    ans: "Not yet, but we're planning to offer this feature in the future. Stay tuned for updates on our website and social media.",
    id: "4",
  },
  {
    ques: "How can I contact Kitaab Kholo?",
    ans: "You can contact us through our website's contact page or by calling us at our customer support number during business hours. We will be happy to assist you with any questions or concerns you may have.",
    id: "5",
  },
];

const placeholder =
  "It can't help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren't many people or Pokémon.";

export function Faq() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Col span={12} md={6}>
            <Image src={image.src} alt="Frequently Asked Questions" />
          </Col>
          <Col span={12} md={6}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion
              chevronPosition="right"
              defaultValue="reset-password"
              variant="separated"
            >
              {faqs.map(({ ques, ans, id }) => (
                <Accordion.Item className={classes.item} value={id} key={id}>
                  <Accordion.Control>{ques}</Accordion.Control>
                  <Accordion.Panel>{ans}</Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}
