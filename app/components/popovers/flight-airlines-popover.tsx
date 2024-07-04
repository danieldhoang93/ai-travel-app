import { Popover, Button, MultiSelect, Checkbox, Stack } from "@mantine/core";
import { useState } from "react";
import { TbCaretUpFilled, TbCaretDownFilled } from "react-icons/tb";
import { airlineOptions } from "~/constants/flights";
import useFlightPickerStore from "~/stores/useFlightPickerStore";

export default function FlightAirlinesPopover() {
  const { flightPickerOptions, setFlightPickerOptions } = useFlightPickerStore(
    (state) => ({
      flightPickerOptions: state.flightPickerOptions,
      setFlightPickerOptions: state.setFlightPickerOptions,
    }),
  );
  const [opened, setOpened] = useState<boolean>(false);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [searchedAirline, setSearchedAirline] = useState<string>("");
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);

  const { airlines } = flightPickerOptions;

  const selectAllAirlines = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.checked;
    setSelectAll(value);

    value
      ? setSelectedAirlines(airlineOptions.map((option) => option.value))
      : setSelectedAirlines([]);
  };

  const applyAirlines = () => {
    setFlightPickerOptions("airlines", selectedAirlines);
    setOpened(false);
  };

  return (
    <Popover opened={opened} onChange={setOpened} shadow="xl">
      <Popover.Target>
        <Button
          variant={airlines.length ? "light" : "default"}
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
          {airlines.length
            ? `${airlines.length} airline${airlines.length === 1 ? "" : "s"}`
            : "Airlines"}
        </Button>
      </Popover.Target>

      <Popover.Dropdown>
        <Stack gap="sm">
          <Checkbox
            checked={selectAll}
            onChange={selectAllAirlines}
            label="Select All Airlines"
          />
          <MultiSelect
            w={350}
            checkIconPosition="right"
            label="Airlines"
            placeholder="Select airlines"
            data={airlineOptions}
            searchValue={searchedAirline}
            onSearchChange={setSearchedAirline}
            value={selectedAirlines}
            onChange={setSelectedAirlines}
            searchable
            comboboxProps={{ withinPortal: false }}
          />
          <Button onClick={applyAirlines}>Apply</Button>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
