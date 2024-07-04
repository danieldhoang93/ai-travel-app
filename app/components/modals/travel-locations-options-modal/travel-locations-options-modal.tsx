import { Modal } from "@mantine/core";
import { useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import useMapLocationsStore from "~/stores/useMapLocationsStore";

interface TravelLocationsOptionsModalProps {
  opened: boolean;
  close: () => void;
  locationId: string;
}

export default function TravelLocationsOptionsModal({
  opened,
  close,
  locationId,
}: TravelLocationsOptionsModalProps) {
  const mapLocations = useMapLocationsStore(
    useShallow((state) => state.mapLocations),
  );
  const locationObject = useMemo(() => {
    return mapLocations.get(Number(locationId));
  }, [mapLocations]);

  const title = useMemo(() => {
    return `${locationObject?.city}, ${locationObject?.stateAbbreviation || locationObject?.country}`;
  }, [locationObject]);

  return (
    <>
      <Modal
        keepMounted={false}
        opened={opened}
        onClose={close}
        title={title}
        centered
      >
        Hello
      </Modal>
    </>
  );
}
