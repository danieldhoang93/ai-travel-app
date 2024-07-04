import {
  Container,
  Flex,
  Paper,
  Tabs,
  Title,
  Button,
  Group,
  Accordion,
  Stack,
  Text,
  Image,
  Divider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useParams } from "@remix-run/react";
import { MetaFunction } from "@vercel/remix";
import { useState } from "react";
import {
  TbBeach,
  TbBed,
  TbCar,
  TbChevronDown,
  TbPlane,
  TbTrain,
} from "react-icons/tb";
import ItineraryDrawer from "~/components/drawers/itininerary-drawer";
import FlightsPicker from "~/components/flight-picker/flight-picker";
import FlightsTable from "~/components/flight-picker/flight-picker-table";
import ActivitiesTab from "~/components/trip-planner/activities-tab/activities-tab";
import StaysTab from "~/components/trip-planner/stays-tab/stays-tab";
import TransportationTabs from "~/components/trip-planner/transportation-tabs/transportation-tabs";
import useMapLocationsStore from "~/stores/useMapLocationsStore";
import useTripsStore from "~/stores/useTripsStore";
import { formatDateRange } from "~/utils/dates";

export const meta: MetaFunction = () => {
  return [
    { title: "Travel App" },
    { name: "Plan Your Trip", content: "Plan Your Trip" },
  ];
};

export default function Index() {
  const params = useParams();
  const { id } = params;
  const { mapLocations } = useMapLocationsStore((state) => ({
    mapLocations: state.mapLocations,
  }));
  const { userTrips } = useTripsStore((state) => ({
    userTrips: state.userTrips,
  }));
  const trips = userTrips.get(Number(id));
  const { travelLocations, startingLocation, returnLocation } = trips || {};
  const startLocation = mapLocations.get(Number(startingLocation?.id));

  const [activeTransportationTab, setActiveTransportationTab] = useState<string>("flights");
  const [opened, { open, close }] = useDisclosure(false);

  const transportationIcon = {
    flights: <TbPlane size={30} />,
    rentals: <TbCar size={30} />,
    publicTransit: <TbTrain size={30} />,
  };

  const travelAndReturnLocations = (travelLocations || []).map((item) => ({
    ...item,
  }));
  returnLocation && travelAndReturnLocations.push(returnLocation);

  const items = travelAndReturnLocations?.map((travelLocation, index) => {
    const location = mapLocations.get(travelLocation.id);
    const prevLocationId =
      index - 1 >= 0
        ? travelAndReturnLocations[index - 1].id
        : startLocation?.id!;
    const prevLocation = mapLocations.get(prevLocationId) ?? startLocation;
    console.log({
      travelAndReturnLocations,
      id: travelAndReturnLocations[index].id,
      prevLocation,
    });

    return (
      <Accordion.Item key={travelLocation.id} value={String(travelLocation.id)}>
        <Accordion.Control p="0">
          <Flex direction="row" justify="space-between">
            <Group justify="space-between" w="100%">
              <Stack gap="xs">
                <Title order={3}>
                  <Flex>
                    {prevLocation?.city},{" "}
                    {prevLocation?.stateAbbreviation ?? prevLocation?.country}
                    {transportationIcon[activeTransportationTab]}
                    {location?.city},{" "}
                    {location?.stateAbbreviation ?? location?.country}
                  </Flex>
                </Title>
                <Text c="gray" fz="sm" fw={700}>
                  {formatDateRange(
                    travelLocation.arrivalDate!,
                    travelLocation.departureDate! || travelLocation.arrivalDate!,
                  )}
                </Text>
              </Stack>

              <Group>
                <Button
                  color="red"
                  variant="light"
                  leftSection={<TbPlane size={16} />}
                  w="max-content"
                >
                  No transportation
                </Button>
                <Button
                  color="red"
                  variant="light"
                  leftSection={<TbBed size={16} />}
                  w="max-content"
                >
                  No housing
                </Button>
                <Button
                  color="red"
                  variant="light"
                  leftSection={<TbBeach size={16} />}
                  w="max-content"
                >
                  No activities
                </Button>
                <Button w="max-content">See Itinerary</Button>
              </Group>
            </Group>
          </Flex>
        </Accordion.Control>
        <Accordion.Panel>
          <Flex
            key={travelLocation.id}
            direction="column"
            gap="xl"
            w="100%"
            mb="xl"
          >
            <Flex direction="column" gap="sm">
              {/* transportation */}
              <Title order={2}>Transportation</Title>
              <TransportationTabs activeTab={activeTransportationTab} setActiveTab={(e) => setActiveTransportationTab(e!)}/>
            </Flex>

            <Stack gap='xs'>
              <Title order={2}>
                Stays
                {/* {location?.city},{" "}
                {location?.stateAbbreviation ?? location?.country} */}
              </Title>
              <StaysTab/>
            </Stack>

            <Stack gap='xs'>
              <Title order={2}>
                Activities
              </Title>
              <ActivitiesTab/>
            </Stack>
          </Flex>
        </Accordion.Panel>
      </Accordion.Item>
    );
  });

  return (
    <Container size="xl" p="0">
      <Flex direction="column" w="100%" align="flex-start">
        <Group justify="space-between" w="100%">
          <Title order={2}>Your Trip</Title>
          <Button onClick={open}>See Full Itinerary</Button>
        </Group>

        <Divider w="100%" />

        <Accordion
          chevronPosition="left"
          radius="lg"
          w="100%"
          chevron={<TbChevronDown size={24} />}
          chevronSize={24}
          defaultValue={
            travelLocations?.length === 1
              ? String(travelLocations[0].id)
              : undefined
          }
        >
          {items}
        </Accordion>
      </Flex>

      <ItineraryDrawer opened={opened} close={close} itinerary={trips} />
    </Container>
  );
}
