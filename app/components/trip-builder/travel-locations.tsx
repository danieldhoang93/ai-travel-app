import { Flex, Select, Tooltip, ActionIcon } from "@mantine/core";
import { DatePickerInput, DateValue } from "@mantine/dates";
import { useCallback, useMemo } from "react";
import {
  TbLocation,
  TbCalendarMonth,
  TbSettings,
  TbTrash,
} from "react-icons/tb";
import useMapLocationsStore from "~/stores/useMapLocationsStore";
import { useDisclosure } from "@mantine/hooks";
import TravelLocationsOptionsModal from "../modals/travel-locations-options-modal/travel-locations-options-modal";

interface TravelLocationsProps {
  travelLocations: any;
  setLocationsHandler: any;
  flightType: string;
}

export default function TravelLocations({
  travelLocations,
  setLocationsHandler,
  flightType,
}: TravelLocationsProps) {
  const removeLocation = (id: number) => {
    setLocationsHandler(
      travelLocations.filter((location) => location.id !== id),
    );
  };

  const handleLocationChange = (index: number, value: string) => {
    const newLocations = [...travelLocations];
    newLocations[index].travelLocation = value;
    setLocationsHandler(newLocations);
  };

  const onTravelDateChange = (index: number, date: DateValue) => {
    const newLocations = [...travelLocations];
    newLocations[index].startDate = date;
    setLocationsHandler(newLocations);
  };

  const deleteDisabled = useMemo(() => {
    return travelLocations.length <= 1;
  }, [travelLocations]);

  const isLastDepartureDisabled = useCallback(
    (index: number) => {
      return (
        flightType !== "Different return location" &&
        travelLocations.length === index + 1
      );
    },
    [travelLocations, flightType],
  );

  return (
    <>
      {travelLocations.map((location, index) => (
        <TravelLocation
          key={location.id}
          index={index}
          location={location}
          handleLocationChange={handleLocationChange}
          onTravelDateChange={onTravelDateChange}
          removeLocation={removeLocation}
          deleteDisabled={deleteDisabled}
          lastDepartureDisabled={isLastDepartureDisabled(index)}
        />
      ))}
    </>
  );
}

interface TravelLocationProps {
  location: any;
  index: number;
  handleLocationChange: (index: number, value: string) => void;
  onTravelDateChange: (index: number, date: DateValue) => void;
  removeLocation: (id: number) => void;
  deleteDisabled: boolean;
  lastDepartureDisabled: boolean;
}

function TravelLocation({
  location,
  index,
  handleLocationChange,
  onTravelDateChange,
  removeLocation,
  deleteDisabled,
  lastDepartureDisabled,
}: TravelLocationProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const mapLocationsIdArray = useMapLocationsStore(
    (state) => state.mapLocationsIdArray,
  );

  return (
    <>
      <Flex direction="row" align="flex-end" key={location.id}>
        <Select
          label="Traveling To"
          placeholder="Search"
          data={mapLocationsIdArray}
          searchable
          leftSection={<TbLocation />}
          variant="filled"
          w="50%"
          value={location.travelLocation}
          onChange={(value) => handleLocationChange(index, value!)}
        />

        {/* {!lastDepartureDisabled && ( */}
        <DatePickerInput
          label="Departure date"
          placeholder="Departure date"
          value={location.startDate}
          onChange={(date) => onTravelDateChange(index, date)}
          variant="filled"
          leftSection={<TbCalendarMonth />}
          w="50%"
        />
        {/* )} */}

        <Flex gap="sm">
          <Tooltip label="Delete row">
            <ActionIcon
              disabled={deleteDisabled}
              color="red"
              size="input-md"
              variant="light"
              onClick={() => removeLocation(location.id)}
            >
              <TbTrash />
            </ActionIcon>
          </Tooltip>
        </Flex>
      </Flex>

      <TravelLocationsOptionsModal
        opened={opened}
        close={close}
        locationId={location.travelLocation}
      />
    </>
  );
}
