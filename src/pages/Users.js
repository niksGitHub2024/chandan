import { Container, Title, Text, Stack } from '@mantine/core';

const Users = () => {
  return (
    <Container size="xl" py="xl">
      <Stack gap="lg">
        <div>
          <Title order={1}>Users</Title>
          <Text c="dimmed" mt="xs">
            User analytics and management
          </Text>
        </div>
      </Stack>
    </Container>
  );
};

export default Users;

