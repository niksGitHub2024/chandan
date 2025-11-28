import { Container, Title, Text, Stack } from '@mantine/core';

const Settings = () => {
  return (
    <Container size="xl" py="xl">
      <Stack gap="lg">
        <div>
          <Title order={1}>Settings</Title>
          <Text c="dimmed" mt="xs">
            Manage your preferences and settings
          </Text>
        </div>
      </Stack>
    </Container>
  );
};

export default Settings;

