import { Popover, Button, Radio, Stack, NumberInput } from "@mantine/core";
import { useState, useMemo } from "react";
import { TbCaretUpFilled, TbCaretDownFilled } from "react-icons/tb";
import useFlightPickerStore from "~/stores/useFlightPickerStore";

export default function FlightBagsPopover() {
  const { flightPickerOptions, updateBags } = useFlightPickerStore((state) => ({
    flightPickerOptions: state.flightPickerOptions,
    updateBags: state.updateBags,
  }));
  const { bags } = flightPickerOptions;
  const [opened, setOpened] = useState<boolean>(false);
  const [checkedBags, setCheckedBags] = useState<string | number>(0);
  const [carryOnBags, setCarryOnBags] = useState<string | number>(0);

  const handleApplyStops = () => {
    updateBags({ checked: Number(checkedBags), carryOn: Number(carryOnBags) });
    setOpened(false);
  };

  const totalBags = useMemo(() => {
    return bags.checked + bags.carryOn;
  }, [bags.checked, bags.carryOn]);

  const has0Bags = useMemo(() => {
    return totalBags === 0;
  }, [totalBags]);

  return (
    <Popover opened={opened} onChange={setOpened} shadow="xl">
      <Popover.Target>
        <Button
          variant={has0Bags ? "default" : "light"}
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
          {has0Bags ? "Bags" : `${totalBags} bag${totalBags === 1 ? "" : "s"}`}
        </Button>
      </Popover.Target>

      <Popover.Dropdown>
        <Stack>
          <NumberInput
            label="Checked Bags"
            defaultValue={0}
            min={0}
            max={20}
            radius="md"
            value={checkedBags}
            onChange={setCheckedBags}
          />

          <NumberInput
            label="Carry-on Bags"
            defaultValue={0}
            min={0}
            max={20}
            radius="md"
            value={carryOnBags}
            onChange={setCarryOnBags}
          />
          <Button onClick={handleApplyStops}>Apply</Button>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
