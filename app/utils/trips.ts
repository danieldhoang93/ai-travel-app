import { Trip } from "~/types/trips";

const isPast = (dateString: string): boolean => {
  const today = new Date();
  const date = new Date(dateString);
  return date < today;
};

export const splitTrips = (trips: Trip[]) => {
  const upcoming: Trip[] = [];
  const past: Trip[] = [];

  trips.forEach((trip) => {
    if (isPast(trip.endDate)) {
      // Set isPast to true for past trips
      past.push({ ...trip, isPast: true });
    } else {
      // Ensure isPast is false for upcoming trips
      upcoming.push({ ...trip, isPast: false });
    }
  });

  return { upcoming, past };
};

export const getLocationLabel = (location: any) => {
  return `${location?.city}, ${location?.stateAbbreviation || location?.country}`;
};
