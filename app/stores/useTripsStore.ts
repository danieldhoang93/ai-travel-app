import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getUsersTrips } from "~/api/trips";
import { Trip } from "~/types/trips";
import { splitTrips } from "~/utils/trips";

type State = {
  userTrips: Map<number, Trip>;
  upcomingTrips: Trip[];
  pastTrips: Trip[];
  draftTrips: Trip[];
  getUserTrips: () => Promise<void>;
  setDraftTrip: (trip: Trip) => void;
};

const useTripsStore = create<State>()(
  persist(
    (set, get) => ({
      userTrips: new Map(),
      upcomingTrips: [],
      pastTrips: [],
      draftTrips: [],
      getUserTrips: async () => {
        try {
          const dbTrips = await getUsersTrips();

          const { draftTrips } = get();
          console.log({ draftTrips });

          // Combine API trips and draft trips
          const combinedTrips = [...dbTrips, ...draftTrips];
          const locationMap = new Map(
            combinedTrips.map((location) => [location.id, location]),
          );

          const { upcoming, past } = splitTrips(combinedTrips);
          set({
            userTrips: locationMap,
            upcomingTrips: upcoming,
            pastTrips: past,
          });
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      },
      setDraftTrip: (trip: Trip) =>
        set((state) => ({
          draftTrips: [...state.draftTrips, trip],
        })),
    }),
    {
      name: "draft-trips-storage", // name of the item in storage (must be unique)
      partialize: (state) => ({ draftTrips: state.draftTrips }), // persist only draftTrips
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    },
  ),
);

export default useTripsStore;
