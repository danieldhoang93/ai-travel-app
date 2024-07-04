import { Tabs, Flex, Title } from "@mantine/core";
import { TbPlane, TbCar, TbTrain } from "react-icons/tb";
import FlightsPicker from "~/components/flight-picker/flight-picker";
import FlightsTable from "~/components/flight-picker/flight-picker-table";

interface TransportationTabsProps {
    activeTab: string,
    setActiveTab: (value: string | null) => void;
}

export default function TransportationTabs ({
    activeTab,
    setActiveTab
}: TransportationTabsProps) {

    return (
        <Tabs
            value={activeTab}
            onChange={setActiveTab}
            color="violet"
            radius="xs"
            defaultValue="flights"
            >
            <Tabs.List>
                <Tabs.Tab value="flights" rightSection={<TbPlane />}>
                Flights
                </Tabs.Tab>
                <Tabs.Tab value="rentals" rightSection={<TbCar />}>
                Rentals
                </Tabs.Tab>
                <Tabs.Tab value="publicTransit" rightSection={<TbTrain />}>
                Public Transit
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="flights">
                <FlightsPicker />
            </Tabs.Panel>

            <Tabs.Panel value="rentals">
                <Flex direction="column" gap="sm" mt="xl">
                <Title order={3}>Best Rental Options</Title>
                <FlightsTable />
                </Flex>
            </Tabs.Panel>

            <Tabs.Panel value="publicTransit">
                <Flex direction="column" gap="sm" mt="xl">
                <Title order={3}>Best Public Transporation Options</Title>
                <FlightsTable />
                </Flex>
            </Tabs.Panel>
        </Tabs>
    )
}