import { Popover, Button, Radio, Stack } from "@mantine/core";
import { useState, useMemo } from "react";
import { TbCaretUpFilled, TbCaretDownFilled } from "react-icons/tb";
import { stopsLabelMap } from "~/constants/flights";
import useFlightPickerStore from "~/stores/useFlightPickerStore";
import { StopValues } from "~/types/flight-picker";

export default function FlightStopsPopover() {
  const { flightPickerOptions, setFlightPickerOptions } = useFlightPickerStore(
    (state) => ({
      flightPickerOptions: state.flightPickerOptions,
      setFlightPickerOptions: state.setFlightPickerOptions,
    }),
  );
  const { stops } = flightPickerOptions;
  const [opened, setOpened] = useState<boolean>(false);
  const [selectedStops, setSelectedStops] = useState<StopValues>("any");

  const handleApplyStops = () => {
    setFlightPickerOptions("stops", selectedStops);
    setOpened(false);
  };

  const selectedAnyStops = useMemo(() => {
    return stops === "any";
  }, [stops]);

  return (
    <Popover opened={opened} onChange={setOpened} shadow="xl">
      <Popover.Target>
        <Button
          variant={selectedAnyStops ? "default" : "light"}
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
          {selectedAnyStops ? "Stops" : stopsLabelMap[stops]}
        </Button>
      </Popover.Target>

      <Popover.Dropdown>
        <Radio.Group
          value={selectedStops}
          onChange={(value) => setSelectedStops(value as StopValues)}
        >
          <Stack>
            <Radio value="any" label="Any number of stops" />
            <Radio value="0" label="Nonstop" />
            <Radio value="1" label="1 stop" />
            <Radio value="2" label="2+ stops" />
            <Button onClick={handleApplyStops}>Apply</Button>
          </Stack>
        </Radio.Group>
      </Popover.Dropdown>
    </Popover>
  );
}
