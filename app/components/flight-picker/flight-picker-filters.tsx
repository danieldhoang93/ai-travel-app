import { Flex, Popover, Button } from "@mantine/core";
import { useState } from "react";
import { TbCaretUpFilled, TbCaretDownFilled } from "react-icons/tb";
import FlightAirlinesPopover from "../popovers/flight-airlines-popover";
import FlightBagsPopover from "../popovers/flight-bags-popover";
import FlightCabinPopover from "../popovers/flight-cabin-popover";
import FlightDurationPopover from "../popovers/flight-duration-popover";
import FlightPricePopover from "../popovers/flight-prices-popover";
import FlightStopsPopover from "../popovers/flight-stops-popover";

export default function FlightPickerFilters() {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <Flex gap="sm" w="100%">
      <FlightStopsPopover />
      <FlightBagsPopover />
      <FlightAirlinesPopover />
      <FlightPricePopover />

      <Popover opened={opened} onChange={setOpened} shadow="xl">
        <Popover.Target>
          <Button
            variant="default"
            rightSection={
              opened ? (
                <TbCaretUpFilled size={15} />
              ) : (
                <TbCaretDownFilled size={15} />
              )
            }
            onClick={() => setOpened((o) => !o)}
            w="100%"
          >
            Times
          </Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>

      <FlightDurationPopover />

      <FlightCabinPopover />
    </Flex>
  );
}
