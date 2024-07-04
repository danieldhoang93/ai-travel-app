import { Trip } from "~/types/trips";

export const getUsersTrips = async () => {
  // const response = await fetch("YOUR_API_ENDPOINT");
  // const data = await response.json();
  const data = mockTrips;
  return data;
};

const mockTrips: Trip[] = [
  // round trip
  {
    id: 1,
    name: "Joe's Birthday trip",
    tripType: "Round-trip",
    startDate: "1/1/2024",
    endDate: "1/3/2024",
    startingLocation: {
      id: 1,
      departureDate: "1/1/2024",
      transportion: {
        type: "train",
        confirmationId: "234",
        booking: "Amtrak",
      },
      accomodations: {
        type: "bnb",
        confirmationId: "68a",
        booking: "airbnb",
      },
    },
    travelLocations: [
      {
        id: 2,
        arrivalDate: "1/1/2024",
        departureDate: "1/3/2024",
      },
    ],
    returnLocation: {
      id: 1,
      arrivalDate: "1/3/2024",
    },
  },

  // one way
  {
    id: 2,
    tripType: "One-way",
    startDate: "2/1/2024",
    endDate: "2/5/2024",
    startingLocation: {
      id: 1,
      departureDate: "2/1/2024",
    },
    travelLocations: [
      {
        id: 4,
        arrivalDate: "2/1/2024",
        departureDate: "2/5/2024",
      },
      {
        id: 5,
        arrivalDate: "2/5/2024",
      },
    ],
  },

  // different return location
  {
    id: 3,
    tripType: "Different return location",
    startDate: "3/1/2024",
    endDate: "3/20/2024",
    startingLocation: {
      id: 1,
      departureDate: "3/1/2024",
      transportion: {
        type: "flight",
        confirmationId: "123",
        booking: "Delta",
      },
    },
    travelLocations: [
      {
        id: 6,
        arrivalDate: "3/1/2024",
        departureDate: "3/7/2024",
      },
      {
        id: 7,
        arrivalDate: "3/7/2024",
        departureDate: "3/13/2024",
        accomodations: {
          type: "hotel",
          confirmationId: "456",
          booking: "Marriot",
        },
      },
      {
        id: 8,
        arrivalDate: "3/13/2024",
        departureDate: "3/20/2024",
      },
      {
        id: 6,
        arrivalDate: "3/20/2024",
        departureDate: "3/21/2024",
      },
    ],
    returnLocation: {
      id: 1,
      arrivalDate: "3/21/2024",
    },
  },
  {
    id: 5,
    name: "Miami Conference",
    tripType: "Round-trip",
    startDate: "7/11/2024",
    endDate: "7/16/2024",
    startingLocation: {
      id: 1,
      departureDate: "7/11/2024",
      transportion: {
        type: "flight",
        confirmationId: "54675ff",
        booking: "Spirit",
      },
      accomodations: {
        type: "bnb",
        confirmationId: "34563cvb",
        booking: "airbnb",
      },
    },
    travelLocations: [
      {
        id: 9,
        arrivalDate: "7/11/2024",
        departureDate: "7/15/2024",
      },
      {
        id: 12,
        arrivalDate: "7/15/2024",
        departureDate: "7/16/2024",
      },
    ],
    returnLocation: {
      id: 1,
      arrivalDate: "7/16/2024",
    },
  },
  {
    id: 4,
    name: "Baby's birthday",
    tripType: "Round-trip",
    startDate: "10/16/2023",
    endDate: "10/23/2023",
    startingLocation: {
      id: 1,
      departureDate: "10/16/2023",
      transportion: {
        type: "flight",
        confirmationId: "34534d",
        booking: "Spirit",
      },
    },
    travelLocations: [
      {
        id: 5,
        arrivalDate: "10/16/2023",
        departureDate: "10/23/2023",
      },
    ],
    returnLocation: {
      id: 1,
      arrivalDate: "10/23/2023",
    },
  },
  {
    id: 6,
    name: "July 4th",
    tripType: "Round-trip",
    startDate: "6/28/2024",
    endDate: "7/5/2024",
    startingLocation: {
      id: 1,
      departureDate: "6/28/2024",
      transportion: {
        type: "flight",
        confirmationId: "dfgd333",
        booking: "Jetblue",
      },
    },
    travelLocations: [
      {
        id: 10,
        arrivalDate: "6/28/2024",
        departureDate: "7/5/2024",
      },
    ],
    returnLocation: {
      id: 1,
      arrivalDate: "7/5/2024",
    },
  },
];
