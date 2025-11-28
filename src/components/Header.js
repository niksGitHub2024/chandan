import { Group, Burger, Text, ActionIcon, Tooltip, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoon, IconBell, IconUser } from '@tabler/icons-react';
import { useApp } from '../context/AppContext';

const Header = ({ onBurgerClick, opened }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { notifications } = useApp();

  return (
    <Group h="100%" px="md" justify="space-between">
      <Group>
        <Burger
          opened={opened}
          onClick={onBurgerClick}
          hiddenFrom="sm"
          size="sm"
        />
        <Text fw={700} size="lg">
          Analytics Dashboard
        </Text>
      </Group>

      <Group gap="xs">
        <Tooltip label={colorScheme === 'dark' ? 'Light mode' : 'Dark mode'}>
          <ActionIcon
            variant="default"
            size="lg"
            onClick={toggleColorScheme}
            aria-label="Toggle color scheme"
          >
            {colorScheme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
          </ActionIcon>
        </Tooltip>

        <Tooltip label={`${notifications.length} notifications`}>
          <ActionIcon variant="default" size="lg" aria-label="Notifications">
            <IconBell size={20} />
          </ActionIcon>
        </Tooltip>

        <Tooltip label="User profile">
          <ActionIcon variant="default" size="lg" aria-label="User profile">
            <IconUser size={20} />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Group>
  );
};

export default Header;

