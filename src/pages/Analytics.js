import { Container, Title, Text, Stack } from '@mantine/core';

const Analytics = () => {
  return (
    <Container size="xl" py="xl">
      <Stack gap="lg">
        <div>
          <Title order={1}>Analytics</Title>
          <Text c="dimmed" mt="xs">
            Deep dive into your data analytics
          </Text>
        </div>
      </Stack>
    </Container>
  );
};

export default Analytics;

