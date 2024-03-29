import { Grid, Skeleton, Container } from "@mantine/core";

const child = <Skeleton height={140} radius="md" animate={false} />;

export function GridAsymmetrical() {
  return (
    <Container my="md">
      <Grid>
        <Grid.Col xs={4}>{child}</Grid.Col>
      </Grid>
    </Container>
  );
}
