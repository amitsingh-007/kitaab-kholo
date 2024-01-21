import { Container, SimpleGrid, Text, rem } from "@mantine/core";
import {
  IconCertificate,
  IconCoin,
  IconTruck,
  TablerIconsProps,
} from "@tabler/icons-react";
import clsx from "clsx";
import styles from "./styles/Stats.module.css";

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
  return (
    <div className={clsx(styles.feature, className)} {...others}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <Icon
          style={{ width: rem(38), height: rem(38) }}
          className={styles.icon}
          stroke={1.5}
        />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={styles.title}>
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
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}

export default StatsRing;
