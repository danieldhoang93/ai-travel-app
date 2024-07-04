import { Popover, Button, Radio, Stack } from "@mantine/core";
import { useState } from "react";
import { TbCaretUpFilled, TbCaretDownFilled } from "react-icons/tb";
import { cabinOptions, cabinsMap } from "~/constants/flights";
import useFlightPickerStore from "~/stores/useFlightPickerStore";
import { Cabins } from "~/types/flight-picker";

export default function FlightCabinPopover() {
  const { flightPickerOptions, setFlightPickerOptions } = useFlightPickerStore(
    (state) => ({
      flightPickerOptions: state.flightPickerOptions,
      setFlightPickerOptions: state.setFlightPickerOptions,
    }),
  );
  const { cabin } = flightPickerOptions;
  const [opened, setOpened] = useState<boolean>(false);
  const [selectedCabin, setSelectedCabin] = useState<Cabins>("basic");

  const handleApplyStops = () => {
    setFlightPickerOptions("cabin", selectedCabin);
    setOpened(false);
  };

  return (
    <Popover opened={opened} onChange={setOpened} shadow="xl">
      <Popover.Target>
        <Button
          variant="light"
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
          {cabinsMap[cabin]}
        </Button>
      </Popover.Target>

      <Popover.Dropdown>
        <Radio.Group
          value={selectedCabin}
          onChange={(value) => setSelectedCabin(value as Cabins)}
          w={150}
        >
          <Stack>
            {cabinOptions.map((option) => (
              <Radio
                key={option.value}
                value={option.value}
                label={option.label}
              />
            ))}
            <Button onClick={handleApplyStops}>Apply</Button>
          </Stack>
        </Radio.Group>
      </Popover.Dropdown>
    </Popover>
  );
}
