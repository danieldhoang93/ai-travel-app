import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SuggestedItinerary } from "~/types/itinerary";

type State = {
    suggestedItineraries: SuggestedItinerary[];
    addItinerary: (itinerary: SuggestedItinerary) => void;
    getItinerary: (index: number) => SuggestedItinerary | undefined;
};

const useTripsStore = create<State>()(
    persist(
      (set, get) => ({
        suggestedItineraries: [],
        addItinerary: (itinerary: SuggestedItinerary) => {
          const currentItineraries = get().suggestedItineraries;
          set({ suggestedItineraries: [...currentItineraries, itinerary] });
        },
        getItinerary: (tripId: number) => {
            return get().suggestedItineraries.find(itinerary => itinerary.tripId === tripId);
        },
      }),
      {
        name: 'suggested-itinerary-storage',
        partialize: (state) => ({ suggestedItineraries: state.suggestedItineraries }),
        getStorage: () => localStorage,
      }
    )
);

export default useTripsStore;
