import { SimpleGrid, Text } from "@mantine/core";
import {
  IconMailFast,
  IconPhone,
  IconTruckDelivery,
  TablerIconsProps,
} from "@tabler/icons-react";

type IData = {
  label: string;
  stats: string;
  color: string;
  icon: (props: TablerIconsProps) => JSX.Element;
}[];

const data: IData = [
  {
    label: "Free Shipping*",
    stats: "on orders above ₹999",
    color: "blue",
    icon: IconTruckDelivery,
  },
  {
    label: "Replacement",
    stats: "15 days replacement",
    color: "green",
    icon: IconMailFast,
  },
  {
    label: "+91-9911947060",
    stats: "customer care available",
    color: "red",
    icon: IconPhone,
  },
];

import { Container, createStyles, rem } from "@mantine/core";
import { IconCertificate, IconCoin, IconTruck } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  feature: {
    position: "relative",
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: "absolute",
    height: rem(100),
    width: rem(160),
    top: 0,
    left: 0,
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    zIndex: 1,
  },

  content: {
    position: "relative",
    zIndex: 2,
  },

  icon: {
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
      .color,
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature({
  icon: Icon,
  title,
  description,
  className,
  ...others
}: FeatureProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={rem(38)} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconTruck,
    title: "Free Shipping",
    description:
      "We offer free shipping on all orders above ₹999, making it a convenient and cost-effective way to buy books. You can track your order on our website for realtime updates.",
  },
  {
    icon: IconCertificate,
    title: "High Quality Books",
    description:
      "We offer high-quality second-hand books that are thoroughly checked before being made available for sale, ensuring that you receive them in good condition.",
  },
  {
    icon: IconCoin,
    title: "Affordable Pricing",
    description:
      "You can get your favorite books at affordable prices. Our second-hand books are priced much lower than their original cost, making it easy for you to build your personal library.",
  },
];

export function StatsRing() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="lg">
      <SimpleGrid
        cols={3}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        spacing={50}
      >
        {items}
      </SimpleGrid>
    </Container>
  );
}

export default StatsRing;
