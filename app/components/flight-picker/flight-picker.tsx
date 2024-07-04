import { Flex, Title, Select } from "@mantine/core";
import FlightPickerFilters from "./flight-picker-filters";
import FlightsTable from "./flight-picker-table";

export default function FlightsPicker() {
  return (
    <Flex direction="column" gap="sm" mt="xl">
      <FlightPickerFilters />
      <Flex justify="space-between">
        <Title order={3}>Best Departing Flights</Title>
        <Select variant="filled" placeholder="Sort" />
      </Flex>
      <FlightsTable />
    </Flex>
  );
}
