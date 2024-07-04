import {
  Flex,
  Select,
  Tooltip,
  ActionIcon,
  Button,
  Divider,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";
import {
  TbHomeMove,
  TbCalendarMonth,
  TbX,
  TbPlus,
  TbEraser,
  TbPlaneTilt,
  TbHome,
} from "react-icons/tb";
import TravelLocations from "./travel-locations";
import useMapLocationsStore from "~/stores/useMapLocationsStore";
import { Link } from "@remix-run/react";
import { ROUTES } from "~/constants/routes";
import { useForm } from "@mantine/form";
import useTripsStore from "~/stores/useTripsStore";
import { FlightTypes } from "~/types/flight-picker";
import { Trip } from "~/types/trips";

export default function TripBuilder() {
  const { setDraftTrip } =
    useTripsStore((state) => ({
      setDraftTrip: state.setDraftTrip,
    }));
  const { mapLocationsIdArray } = useMapLocationsStore((state) => ({
    mapLocationsIdArray: state.mapLocationsIdArray,
  }));
  const form = useForm({
    initialValues: {
      flightType: "Round-trip",
      startingLocation: null,
      departureDate: null,
      returnDate: null,
      locations: [{ id: 1, startDate: null, travelLocation: null }],
    },
  });

  const addLocation = () => {
    form.insertListItem("locations", {
      id: form.values.locations.length + 1,
      startDate: null,
      travelLocation: null,
    });
  };

  const resetLocations = () => {
    form.setFieldValue("locations", [
      { id: 1, startDate: null, travelLocation: null },
    ]);
  };

  const handleAddDraftTrip = () => {
    const newTrip: Trip = {
      id: Math.random(),
      name: "New Draft Trip",
      tripType: "Round-trip" as FlightTypes,
      startDate: "2024-12-01",
      endDate: "2024-12-05",
      startingLocation: {
        id: 1,
        departureDate: "2024-12-01",
      },
      travelLocations: [
        { 
          id: 2, 
          arrivalDate: "2024-12-01",
          departureDate: "2024-12-02",
        }, 
        { id: 13, 
          arrivalDate: "2024-12-02",
          departureDate: "2024-12-03",
        },
      ],
      returnLocation: { 
        id: 1,
        arrivalDate: "2024-12-03",

      },
      isSaved: false,
    };
    console.log({ newTrip });
    setDraftTrip(newTrip);
  };

  return (
    <Flex direction="column" gap="xl">
      <Flex direction="column" gap="sm">
        <Flex justify="space-between">
          <Select
            label=""
            data={["Round-trip", "One-way", "Different return location"]}
            defaultValue="Round-trip"
            searchable
            variant="filled"
            w="100%"
            maw="250"
            {...form.getInputProps("flightType")}
          />

          <Flex gap="sm">
            <Button
              color="violet"
              variant="light"
              rightSection={<TbPlus />}
              onClick={addLocation}
            >
              Add new location
            </Button>
            <Button
              color="red"
              variant="light"
              rightSection={<TbEraser />}
              onClick={resetLocations}
            >
              Reset
            </Button>
          </Flex>
        </Flex>

        <Divider />

        {/* Starting location */}
        <Flex direction="row" gap="xl" align="flex-end">
          <Select
            label="Departure Location"
            placeholder="Search"
            data={mapLocationsIdArray}
            searchable
            leftSection={<TbHomeMove />}
            variant="filled"
            w="50%"
            {...form.getInputProps("startingLocation")}
          />

          <DatePickerInput
            label="Departure date"
            placeholder="Departure date"
            variant="filled"
            leftSection={<TbCalendarMonth />}
            w="50%"
            {...form.getInputProps("departureDate")}
          />

          {/* {form.values.flightType === "Round-trip" && (
            <DatePickerInput
              label="Return date"
              placeholder="Return date"
              variant="filled"
              leftSection={<TbCalendarMonth />}
              w="50%"
              {...form.getInputProps("returnDate")}
            />
          )} */}

          <Tooltip label="Reset departure options">
            <ActionIcon color="red" size="input-md" variant="light">
              <TbX />
            </ActionIcon>
          </Tooltip>
        </Flex>

        {/* Array of components, growing when Add new location is pressed */}
        <TravelLocations
          travelLocations={form.values.locations}
          setLocationsHandler={form.setFieldValue}
          flightType={form.values.flightType}
        />

        {form.values.flightType !== "One-way" && (
          <Flex direction="row" gap="xl" align="flex-end">
            <Select
              label="Return To"
              placeholder="Search"
              data={mapLocationsIdArray}
              searchable
              leftSection={<TbHome />}
              variant="filled"
              w="50%"
              {...form.getInputProps("returnTo")}
            />

            <DatePickerInput
              label="Return date"
              placeholder="Return date"
              variant="filled"
              leftSection={<TbCalendarMonth />}
              w="50%"
              {...form.getInputProps("returnDate")}
            />

            <Tooltip label="Reset departure options">
              <ActionIcon color="red" size="input-md" variant="light">
                <TbX />
              </ActionIcon>
            </Tooltip>
          </Flex>
        )}
      </Flex>

      <Flex direction="row" justify="flex-end">
        <Button
          // component={Link}
          // to={ROUTES.BUILD_ITINERARY}
          onClick={handleAddDraftTrip}
          color="violet"
          rightSection={<TbPlaneTilt />}
        >
          Plan your trip!
        </Button>
      </Flex>
    </Flex>
  );
}
