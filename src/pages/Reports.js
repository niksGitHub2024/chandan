import { Container, Title, Text, Stack } from '@mantine/core';

const Reports = () => {
  return (
    <Container size="xl" py="xl">
      <Stack gap="lg">
        <div>
          <Title order={1}>Reports</Title>
          <Text c="dimmed" mt="xs">
            View and manage your reports
          </Text>
        </div>
      </Stack>
    </Container>
  );
};

export default Reports;

