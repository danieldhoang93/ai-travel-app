import {
  Popover,
  Button,
  Stack,
  Slider,
  Text,
  NumberFormatter,
  Group,
} from "@mantine/core";
import { useState, useMemo } from "react";
import { TbCaretUpFilled, TbCaretDownFilled } from "react-icons/tb";
import useFlightPickerStore from "~/stores/useFlightPickerStore";

export default function FlightPricePopover() {
  const { flightPickerOptions, setFlightPickerOptions } = useFlightPickerStore(
    (state) => ({
      flightPickerOptions: state.flightPickerOptions,
      setFlightPickerOptions: state.setFlightPickerOptions,
    }),
  );
  const { maxPrice } = flightPickerOptions;
  const [opened, setOpened] = useState<boolean>(false);
  const [maxPriceOption, setMaxPriceOption] = useState<number>(10000);

  const handleApplyStops = () => {
    setFlightPickerOptions("maxPrice", maxPriceOption);
    setOpened(false);
  };

  const hasAppliedMaxPrice = useMemo(() => {
    return maxPrice !== 10000;
  }, [maxPrice]);

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
          <Group gap="3">
            {!hasAppliedMaxPrice ? "Price" : "Up to"}
            {hasAppliedMaxPrice && (
              <NumberFormatter
                prefix="$"
                value={maxPriceOption}
                thousandSeparator
              />
            )}
          </Group>
        </Button>
      </Popover.Target>

      <Popover.Dropdown>
        <Stack>
          <Stack gap="0">
            <Text fw={700}>
              Up to{" "}
              <NumberFormatter
                prefix="$"
                value={maxPriceOption}
                thousandSeparator
              />
            </Text>
            <Slider
              min={0}
              max={10000}
              step={1}
              value={maxPriceOption}
              onChange={setMaxPriceOption}
              defaultValue={10000}
              w={300}
              labelTransitionProps={{
                duration: 150,
                timingFunction: "linear",
              }}
              label={(value) => (
                <NumberFormatter
                  prefix="$"
                  value={maxPriceOption}
                  thousandSeparator
                />
              )}
            />
          </Stack>
          <Button onClick={handleApplyStops}>Apply</Button>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
