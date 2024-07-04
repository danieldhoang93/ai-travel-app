import { Container, Flex, Paper, Title } from "@mantine/core";
import { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
  return [
    { title: "Travel App" },
    { name: "Plan Your Trip", content: "Plan Your Trip" },
  ];
};

export default function Index() {
  return (
    <Container size="xl" mih="100vh" p='0'>
      <Flex h="100vh" direction="column">
        <Flex direction="column" w="100%" align="flex-start">
          <Title order={2}>Plan Your Trip</Title>
          <Paper>
            You have no upcoming trips
          </Paper>
        </Flex>
      </Flex>
    </Container>
  );
}
