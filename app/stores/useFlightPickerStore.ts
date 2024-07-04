import { create } from "zustand";
import { Bags, FlightPickerOptions } from "~/types/flight-picker";

type Store = {
  flightPickerOptions: FlightPickerOptions;
  updateBags: (bags: Bags) => void;
  setFlightPickerOptions: (key: string, value: any) => void;
};

// Create the Zustand store
const useStore = create<Store>((set) => ({
  flightPickerOptions: {
    stops: "any",
    bags: {
      checked: 0,
      carryOn: 0,
    },
    airlines: [],
    maxPrice: 10000,
    maxDuration: 24,
    cabin: "basic",
  },

  updateBags: (bags: Bags) =>
    set((state) => ({
      flightPickerOptions: {
        ...state.flightPickerOptions,
        bags: {
          ...state.flightPickerOptions.bags,
          ...bags,
        },
      },
    })),

  setFlightPickerOptions: (key, value) =>
    set((state) => ({
      flightPickerOptions: {
        ...state.flightPickerOptions,
        [key]: value,
      },
    })),
}));

export default useStore;
