import { Container, Flex, Paper, Space, Title } from "@mantine/core";
import { MetaFunction } from "@vercel/remix";
import { TbPlaneTilt, TbWorld } from "react-icons/tb";
import LocationCarousel from "../components/carousels/location-carousel";
import TripBuilder from "../components/trip-builder/trip-builder";

export const meta: MetaFunction = () => {
  return [
    { title: "Travel App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Container size="xl" mih="100vh" p="0">
      <Flex h="100vh" direction="column">
        <Flex direction="column" w="100%" align="flex-start">
          <Flex direction="column" gap="sm" w="100%">
            <Flex align="center" gap="sm">
              <Title order={2}>Where Are You Going?</Title>
              <TbPlaneTilt size={30} />
            </Flex>

            <Paper shadow="xl" withBorder p="xl" w="100%">
              <TripBuilder />
            </Paper>
          </Flex>

          <Space h="md" />

          <Flex direction="column" gap="sm" w="100%">
            <Flex align="center" gap="sm">
              <Title order={2}>Explore Destinations</Title>
              <TbWorld size={30} />
            </Flex>
            <LocationCarousel />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
