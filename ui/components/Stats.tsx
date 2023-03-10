import {
  Center,
  Group,
  Paper,
  RingProgress,
  SimpleGrid,
  Text,
} from "@mantine/core";
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

function StatsRing() {
  return (
    <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
      {data.map(({ color, icon: Icon, label, stats }) => (
        <Paper withBorder radius="md" p="xs" key={label}>
          <Group>
            <RingProgress
              size={80}
              roundCaps
              thickness={8}
              sections={[{ value: 100, color }]}
              label={
                <Center>
                  <Icon size="1.4rem" stroke={1.5} />
                </Center>
              }
            />

            <div>
              <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
                {label}
              </Text>
              <Text weight={700} size="xl">
                {stats}
              </Text>
            </div>
          </Group>
        </Paper>
      ))}
    </SimpleGrid>
  );
}

export default StatsRing;
