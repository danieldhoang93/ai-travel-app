import { FlightTypes } from "./flight-picker";

export interface Transportation {
  type: string;
  confirmationId: string;
  booking: string;
}

export interface Accommodation {
  type: string;
  confirmationId: string;
  booking: string;
}

export interface Location {
  id: number;
  departureDate?: string;
  arrivalDate?: string; //also return date for return location
  transportion?: Transportation;
  accomodations?: Accommodation;
}

// export interface TravelLocation {
//   id: number;
//   arrivalDate: string;
//   departureDate?: string;
//   accomodations?: Accommodation;
// }

export interface Trip {
  id: number;
  name?: string;
  tripType: FlightTypes;
  startDate: string;
  endDate: string;
  startingLocation: Location;
  travelLocations: Location[];
  returnLocation?: Location;
  isPast?: boolean;
  isSaved?: boolean;
}
