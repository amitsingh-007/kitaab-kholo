import {
  Group,
  Switch,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

const ThemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme({ keepTransitions: true });
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });

  return (
    <Group justify="center" my={30}>
      <Switch
        checked={computedColorScheme === "dark"}
        onChange={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        size="lg"
        onLabel={<IconSun size="1.25rem" stroke={1.5} />}
        offLabel={<IconMoonStars size="1.25rem" stroke={1.5} />}
      />
    </Group>
  );
};

export default ThemeToggle;
