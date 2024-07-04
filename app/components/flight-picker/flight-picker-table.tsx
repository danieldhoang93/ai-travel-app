import { Table, Tooltip, Flex, Paper, Image, Text } from "@mantine/core";
import { Link } from "@remix-run/react";
import { AIRLINE_LOGOS } from "~/constants/flights";

export default function FlightsTable() {
  const rows = flights.map((flight) => (
    <Table.Tr key={flight.id}>
      <Table.Td w={100}>
        <Tooltip label={flight.airline}>
          <Image
            src={AIRLINE_LOGOS[flight.airline]}
            w="30"
            style={{ aspectRatio: 1 }}
          />
        </Tooltip>
      </Table.Td>
      <Table.Td>
        <Flex direction="column" gap="0">
          <Text>
            {flight.departureTime} - {flight.arrivalTime}
          </Text>
          <Text size="xs" c="gray">
            {flight.departureAirport} - {flight.arrivalAirport}
          </Text>
        </Flex>
      </Table.Td>
      <Table.Td>
        <Flex direction="column" gap="0">
          <Text>{flight.duration}</Text>
          <Text size="xs" c="gray">
            {flight.stops} stops
          </Text>
        </Flex>
      </Table.Td>
      <Table.Td>${flight.price}</Table.Td>
      <Table.Td>
        <Link target='_blank' to=''>Book</Link>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Paper py="lg">
      <Table highlightOnHover verticalSpacing="sm">
        {/* <Table.Thead>
            <Table.Tr>
              <Table.Th>Airline</Table.Th>
              <Table.Th>Time/Duration</Table.Th>
              <Table.Th>Symbol</Table.Th>
              <Table.Th>Atomic mass</Table.Th>
            </Table.Tr>
          </Table.Thead> */}
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Paper>
  );
}

const flights = [
  {
    id: 1,
    airline: "Delta",
    departureTime: "5:55pm",
    departureAirport: "LAX",
    arrivalAirport: "LJW",
    arrivalTime: "8:55pm",
    duration: "5 hrs 5 min",
    price: 12.01,
    stops: 0,
  },
  {
    id: 2,
    airline: "Spirit",
    departureTime: "5:55pm",
    departureAirport: "LAX",
    arrivalAirport: "LJW",
    arrivalTime: "8:55pm",
    duration: "5 hrs 28 min",
    price: 14.07,
    stops: 0,
  },
  {
    id: 3,
    airline: "Delta",
    departureTime: "5:55pm",
    departureAirport: "LAX",
    arrivalAirport: "LJW",
    arrivalTime: "8:55pm",
    duration: "5 hrs 25 min",
    price: 88.06,
    stops: 0,
  },
  {
    id: 4,
    airline: "Jetblue",
    departureTime: "5:55pm",
    departureAirport: "LAX",
    arrivalAirport: "LJW",
    arrivalTime: "8:55pm",
    duration: "7 hrs 55 min",
    price: 137.3,
    stops: 1,
  },
  {
    id: 5,
    airline: "United Airlines",
    departureTime: "5:55pm",
    departureAirport: "LAX",
    arrivalAirport: "LJW",
    arrivalTime: "8:55pm",
    duration: "7 hrs 28 min",
    price: 140.12,
    stops: 1,
  },
];
