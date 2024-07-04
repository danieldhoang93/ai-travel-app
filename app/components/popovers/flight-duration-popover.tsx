import { Popover, Button, Stack, Slider, Text } from "@mantine/core";
import { useState, useMemo } from "react";
import { TbCaretUpFilled, TbCaretDownFilled } from "react-icons/tb";
import useFlightPickerStore from "~/stores/useFlightPickerStore";

export default function FlightDurationPopover() {
  const { flightPickerOptions, setFlightPickerOptions } = useFlightPickerStore(
    (state) => ({
      flightPickerOptions: state.flightPickerOptions,
      setFlightPickerOptions: state.setFlightPickerOptions,
    }),
  );
  const { maxDuration } = flightPickerOptions;
  const [opened, setOpened] = useState<boolean>(false);
  const [maxDurationOption, setMaxDurationOption] = useState<number>(24);

  const handleApplyStops = () => {
    setFlightPickerOptions("maxDuration", maxDurationOption);
    setOpened(false);
  };

  const hasAppliedMaxPrice = useMemo(() => {
    return maxDuration !== 24;
  }, [maxDuration]);

  const getDurationText = (value: number) => {
    return `Under ${value} hr${value === 1 ? "" : "s"}`;
  };

  return (
    <Popover opened={opened} onChange={setOpened} shadow="xl">
      <Popover.Target>
        <Button
          variant={!hasAppliedMaxPrice ? "default" : "light"}
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
          {!hasAppliedMaxPrice ? "Duration" : getDurationText(maxDuration)}
        </Button>
      </Popover.Target>

      <Popover.Dropdown>
        <Stack>
          <Stack gap="0">
            <Text fw={700}>{getDurationText(maxDurationOption)}</Text>
            <Slider
              min={1}
              max={24}
              step={1}
              value={maxDurationOption}
              onChange={setMaxDurationOption}
              defaultValue={24}
              w={300}
              labelTransitionProps={{
                duration: 150,
                timingFunction: "linear",
              }}
              label={(value) => getDurationText(value)}
            />
          </Stack>
          <Button onClick={handleApplyStops}>Apply</Button>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
