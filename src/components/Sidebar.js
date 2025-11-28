import { NavLink } from 'react-router-dom';
import { NavLink as MantineNavLink, Stack, Text } from '@mantine/core';
import {
  IconDashboard,
  IconChartLine,
  IconUsers,
  IconSettings,
  IconFileText,
  IconHelp,
} from '@tabler/icons-react';

const navItems = [
  { icon: IconDashboard, label: 'Dashboard', path: '/' },
  { icon: IconChartLine, label: 'Analytics', path: '/analytics' },
  { icon: IconUsers, label: 'Users', path: '/users' },
  { icon: IconFileText, label: 'Reports', path: '/reports' },
  { icon: IconSettings, label: 'Settings', path: '/settings' },
  { icon: IconHelp, label: 'Help', path: '/help' },
];

const Sidebar = () => {
  return (
    <Stack gap="xs">
      <Text fw={600} size="sm" c="dimmed" px="md" py="xs">
        Navigation
      </Text>
      
      {navItems.map((item) => (
        <MantineNavLink
          key={item.path}
          component={NavLink}
          to={item.path}
          label={item.label}
          leftSection={<item.icon size={20} />}
          variant="subtle"
        />
      ))}
    </Stack>
  );
};

export default Sidebar;

