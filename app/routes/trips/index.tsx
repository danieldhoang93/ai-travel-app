import { Carousel } from "@mantine/carousel";
import {
  Container,
  Flex,
  Paper,
  Title,
  Text,
  Badge,
  Button,
  Image,
  Card,
  SimpleGrid,
  Space,
} from "@mantine/core";
import { Link } from "@remix-run/react";
import { MetaFunction } from "@vercel/remix";
import { useMemo, useState } from "react";
import { ROUTES } from "~/constants/routes";
import useMapLocationsStore from "~/stores/useMapLocationsStore";
import useTripsStore from "~/stores/useTripsStore";
import { Trip } from "~/types/trips";
import { formatDateRange } from "~/utils/dates";

export const meta: MetaFunction = () => {
  return [{ title: "Travel App" }, { name: "Trips", content: "Trips" }];
};

export default function Index() {
  const { upcomingTrips, pastTrips } = useTripsStore((state) => ({
    userTrips: state.userTrips,
    upcomingTrips: state.upcomingTrips,
    pastTrips: state.pastTrips,
    getUsersTrips: state.getUserTrips,
  }));
  console.log({ upcomingTrips, pastTrips });
  const [displayedUpcomingTrips, setDisplayedUpcomingTrips] =
    useState<number>(3);
  const [displayedPastTrips, setDisplayedPastTrips] = useState<number>(3);
  const handleSeeMoreUpcomingTrips = () => {
    setDisplayedUpcomingTrips((prev) => prev + 3);
  };
  const handleSeeMorePastTrips = () => {
    setDisplayedPastTrips((prev) => prev + 3);
  };
  const hideSeeMoreUpcomingTrips =
    upcomingTrips.length >= displayedUpcomingTrips;
  const hideSeeMorePastTrips = pastTrips.length >= displayedPastTrips;

  return (
    <Container size="xl" mih="100vh" p="0">
      <Flex h="100vh" direction="column">
        <Flex direction="column" w="100%" align="flex-start">
          <Title order={2}>Upcoming Trips</Title>
          {!upcomingTrips.length ? (
            <Paper p="0" style={{ overflow: "hidden", aspectRatio: 4 }}>
              <Flex
                direction="row"
                p="0"
                gap="0"
                h="100%"
                justify="space-between"
              >
                <Flex
                  direction="column"
                  p="xl"
                  w="100%"
                  justify="space-between"
                >
                  <Flex gap="xs" direction="column">
                    <Text fw={600} size="lg">
                      You don't have any trips planned!
                    </Text>
                    <Text>
                      Don't miss out on the fun and start planning your next
                      adventure with us now.
                    </Text>
                  </Flex>
                  <Button w="max-content">Create your next trip</Button>
                </Flex>
                <Image
                  w="100%"
                  // miw='600'
                  maw="1000"
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </Flex>
            </Paper>
          ) : (
            <TripCards
              displayedTrips={displayedUpcomingTrips}
              travelLocations={upcomingTrips}
            />
          )}
          {upcomingTrips.length > 3 && hideSeeMoreUpcomingTrips && (
            <Button
              w="100%"
              variant="white"
              onClick={handleSeeMoreUpcomingTrips}
            >
              See more upcoming trips
            </Button>
          )}
          <Space h="md" />
          <Title order={2}>Past Trips</Title>
          {!pastTrips.length ? (
            <Text>You have no past trips</Text>
          ) : (
            <TripCards
              displayedTrips={displayedPastTrips}
              travelLocations={pastTrips}
            />
          )}
          {pastTrips.length > 3 && hideSeeMorePastTrips && (
            <Button w="100%" variant="white" onClick={handleSeeMorePastTrips}>
              See more past trips
            </Button>
          )}
        </Flex>
      </Flex>
    </Container>
  );
}

interface TripCardsProps {
  displayedTrips: number;
  travelLocations: any[];
}

function TripCards({ displayedTrips, travelLocations }: TripCardsProps) {
  return (
    <SimpleGrid cols={{ base: 1, xs: 2, lg: 3 }} w="100%" spacing="xl">
      {travelLocations.slice(0, displayedTrips).map((trip) => (
        <TripCard trip={trip} />
      ))}
    </SimpleGrid>
  );
}

interface TripCardProps {
  trip: Trip;
}

function TripCard({ trip }: TripCardProps) {
  const mapLocations = useMapLocationsStore((state) => state.mapLocations);
  const { travelLocations } = trip;
  const getLocation = (locationId: number) => {
    const location = mapLocations.get(locationId);
    return location;
  };

  const getLocationLabel = (locationId: number) => {
    const location = mapLocations.get(locationId);
    return `${location?.city}, ${location?.stateAbbreviation ?? location?.country}`;
  };

  const showControls = useMemo(() => {
    return travelLocations.length > 1;
  }, [travelLocations]);

  return (
    <Flex
      direction="column"
      gap="xs"
      component={Link}
      td="none"
      to={`${ROUTES.TRIPS}/${trip.id}`}
    >
      <Carousel
        previousControlProps={{
          onClick: (e) => {
            e.preventDefault();
          },
        }}
        nextControlProps={{
          onClick: (e) => {
            e.preventDefault();
          },
        }}
        controlSize={40}
        withControls={showControls}
        withIndicators={showControls}
      >
        {travelLocations.map((location) => (
          <Carousel.Slide key={location.id}>
            <Card
              shadow="xl"
              style={{
                backgroundImage: `url(${getLocation(location.id)?.image})`,
                aspectRatio: 4 / 3,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Badge variant="default">{trip.tripType}</Badge>
              <Text c="white" fw={700} size="xl">
                {getLocationLabel(location.id)}
              </Text>
              <Text c="white" fw={700} size="xl">
                {location.arrivalDate}
              </Text>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>

      <Flex justify="space-between">
        <Text c="black" fz="sm">
          {formatDateRange(trip.startDate, trip?.endDate)}
        </Text>
        {!trip?.isPast && (
          <Badge variant="light" color="yellow">
            Incomplete
          </Badge>
        )}
      </Flex>
    </Flex>
  );
}
