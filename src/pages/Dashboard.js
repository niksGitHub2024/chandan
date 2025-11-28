import { Container, Title, Text, Grid, Paper, Stack } from '@mantine/core';
import '../App.css';

const Dashboard = () => {
  return (
    <Container size="xl" py="xl">
      <Stack gap="lg">
        <div>
          <Title order={1}>Dashboard</Title>
          <Text c="dimmed" mt="xs">
            Welcome to your analytics dashboard
          </Text>
        </div>

        <Grid>
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Paper 
              p="md" 
              withBorder 
              className="dashboard-card metric-card"
              style={{ height: '100%' }}
            >
              <Text size="sm" c="dimmed" mb="xs">
                Total Revenue
              </Text>
              <Text size="xl" fw={700}>
                $0
              </Text>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Paper 
              p="md" 
              withBorder 
              className="dashboard-card metric-card"
              style={{ height: '100%' }}
            >
              <Text size="sm" c="dimmed" mb="xs">
                Active Users
              </Text>
              <Text size="xl" fw={700}>
                0
              </Text>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Paper 
              p="md" 
              withBorder 
              className="dashboard-card metric-card"
              style={{ height: '100%' }}
            >
              <Text size="sm" c="dimmed" mb="xs">
                Conversions
              </Text>
              <Text size="xl" fw={700}>
                0%
              </Text>
            </Paper>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Dashboard;

