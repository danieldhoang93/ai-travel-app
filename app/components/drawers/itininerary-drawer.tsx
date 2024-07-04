import {
  Drawer,
  Stack,
  Timeline,
  Title,
  Text,
  Button,
  Group,
  Flex,
} from "@mantine/core";
import { TbBeach, TbBed, TbHome, TbHomeMove, TbPlane } from "react-icons/tb";
import useMapLocationsStore from "~/stores/useMapLocationsStore";
import { Trip } from "~/types/trips";
import { getLocationLabel } from "~/utils/trips";

interface ItineraryDrawerProps {
  opened: boolean;
  close: () => void;
  itinerary?: Trip;
}

export default function ItineraryDrawer({
  opened,
  close,
  itinerary,
}: ItineraryDrawerProps) {
  const { mapLocations } = useMapLocationsStore((state) => ({
    mapLocations: state.mapLocations,
  }));
  const { startingLocation, travelLocations, returnLocation } = itinerary || {};

  const startingLocationObject = startingLocation
    ? mapLocations.get(startingLocation?.id)
    : {};

  const returnLocationObject = returnLocation
    ? mapLocations.get(returnLocation?.id)
    : {};

  const startLocationLabel = getLocationLabel(startingLocationObject);
  const returnLocationLabel = getLocationLabel(returnLocationObject);

  console.log({ startingLocationObject, travelLocations, returnLocation });
  return (
    <Drawer
      radius="md"
      opened={opened}
      onClose={close}
      title="Your Itinerary"
      position="right"
      size="md"
    >
      <Stack my="xl">
        <Timeline active={1} bulletSize={28} lineWidth={2}>
          {/* starting location */}
          <Timeline.Item
            bullet={<TbHomeMove size={16} />}
            title={startLocationLabel}
          />

          {/* travel locations */}
          {travelLocations?.map((travelLocation) => {
            const travelLocationObject = travelLocation
              ? mapLocations.get(travelLocation?.id)
              : {};
            const travelLocationLabel = getLocationLabel(travelLocationObject);
            return (
              <Timeline.Item title={travelLocationLabel}>
                <Flex direction="column" gap="xs">
                  <Button
                    color="red"
                    variant="light"
                    leftSection={<TbPlane size={16} />}
                    w="max-content"
                    size="xs"
                  >
                    No transportation
                  </Button>
                  <Button
                    color="red"
                    variant="light"
                    leftSection={<TbBed size={16} />}
                    w="max-content"
                    size="xs"
                  >
                    No housing
                  </Button>
                  <Button
                    color="red"
                    variant="light"
                    leftSection={<TbBeach size={16} />}
                    w="max-content"
                    size="xs"
                  >
                    No activities
                  </Button>
                  <Text size="xs" mt={4}>
                    In 35 days
                  </Text>
                </Flex>
              </Timeline.Item>
            );
          })}

          {/* return location */}
          <Timeline.Item
            title={returnLocationLabel}
            bullet={<TbHome size={16} />}
          >
            <Flex direction="column" gap="xs">
              <Button
                color="green"
                variant="light"
                leftSection={<TbPlane size={16} />}
                w="max-content"
                size="xs"
              >
                Flight booked
              </Button>
              <Text size="xs" mt={4}>
                In 35 days
              </Text>
            </Flex>
          </Timeline.Item>
        </Timeline>
      </Stack>
    </Drawer>
  );
}
