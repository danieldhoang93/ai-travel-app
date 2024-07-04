// src/store/store.js
import { create } from "zustand";
import { getMapLocations, getMapLocationsIdArray } from "~/api/maps";

type MapLocation = {
  id: number;
  state: string | null;
  stateAbbreviation: string | null;
  city: string;
  country: string;
  gps: string;
  image: string;
  suggestions: {};
  nearbyLocations: number[];
};

type State = {
  mapLocations: Map<number, MapLocation>;
  getMapLocations: () => Promise<void>;
  mapLocationsIdArray: { value: string; label: string }[] | [];
  getMapLocationsArray: () => Promise<void>;
};

const useMapLocationsStore = create<State>((set) => ({
  mapLocations: new Map(),
  getMapLocations: async () => {
    try {
      const data = await getMapLocations();
      set({ mapLocations: data });
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  },
  mapLocationsIdArray: [],
  getMapLocationsArray: async () => {
    try {
      const data = await getMapLocationsIdArray();
      set({ mapLocationsIdArray: data });
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  },
}));

export default useMapLocationsStore;
