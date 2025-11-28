import { Container, Title, Text, Stack } from '@mantine/core';

const Help = () => {
  return (
    <Container size="xl" py="xl">
      <Stack gap="lg">
        <div>
          <Title order={1}>Help & Support</Title>
          <Text c="dimmed" mt="xs">
            Get help and learn how to use the dashboard
          </Text>
        </div>
      </Stack>
    </Container>
  );
};

export default Help;

