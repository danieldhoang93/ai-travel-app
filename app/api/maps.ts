export const getMapLocations = async () => {
  // const response = await fetch("YOUR_API_ENDPOINT");
  // const data = await response.json();
  const data = mockLocations;
  const locationMap = new Map(data.map((location) => [location.id, location]));
  return locationMap;
};

export const getMapLocationsIdArray = async () => {
  const data = mockLocationsArray;
  return data;
};

const mockLocations = [
  {
    id: 1,
    state: "California",
    stateAbbreviation: "CA",
    city: "Los Angeles",
    country: "USA",
    gps: "0,0",
    image:
      "https://www.agoda.com/wp-content/uploads/2024/02/Featured-image-Los-Angeles-during-sunset-1244x700.jpg",
    suggestions: {
      transportation: {
        ignore: false,
        rentals: [],
        publicTransportation: [],
        flights: [],
      },
      housing: {
        ignore: false,
        hotels: [],
        bnbs: [],
        camping: [],
      },
      activities: {
        ignore: false,
        scenic: [],
        restaurants: [],
        museums: [],
        tours: [],
        nightlife: [],
        bars: [],
      },
      nearbyLocations: [],
    },
  },
  {
    id: 2,
    state: "California",
    stateAbbreviation: "CA",
    city: "San Diego",
    country: "USA",
    gps: "0,0",
    image:
      "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-11/Hero_San%20Diego%20Skyline_John%20Bahu.jpg?h=3767f04f&itok=ULC4UclZ",
    suggestions: {
      transportation: {
        ignore: false,
        rentals: [],
        publicTransportation: [],
        flights: [],
      },
      housing: {
        ignore: false,
        hotels: [],
        bnbs: [],
        camping: [],
      },
      activities: {
        ignore: false,
        scenic: [],
        restaurants: [],
        museums: [],
        tours: [],
        nightlife: [],
        bars: [],
      },
      nearbyLocations: [],
    },
  },
  {
    id: 3,
    state: "District of Columbia",
    stateAbbreviation: "DC",
    city: "Washington",
    country: "USA",
    gps: "0,0",
    image:
      "https://image.kkday.com/image/get/s1.kkday.com/product_26334/20191023025158_jeWMJ/jpg",
    suggestions: {
      transportation: {
        ignore: false,
        rentals: [],
        publicTransportation: [],
        flights: [],
      },
      housing: {
        ignore: false,
        hotels: [],
        bnbs: [],
        camping: [],
      },
      activities: {
        ignore: false,
        scenic: [],
        restaurants: [],
        museums: [],
        tours: [],
        nightlife: [],
        bars: [],
      },
      nearbyLocations: [],
    },
  },
  {
    id: 4,
    state: "Maryland",
    stateAbbreviation: "MD",
    city: "Baltimore",
    country: "USA",
    gps: "0,0",
    image:
      "https://www.visiteosusa.com.br/sites/default/files/styles/16_9_1280x720/public/2016-11/HERO%201%20--%20Baltimore%20Evening%20Panorama%20-%20Quarter%20Res_Web72DPI.jpg?h=f136aba0&itok=64dN_Pwy",
    suggestions: {
      transportation: {
        ignore: false,
        rentals: [],
        publicTransportation: [],
        flights: [],
      },
      housing: {
        ignore: false,
        hotels: [],
        bnbs: [],
        camping: [],
      },
      activities: {
        ignore: false,
        scenic: [],
        restaurants: [],
        museums: [],
        tours: [],
        nightlife: [],
        bars: [],
      },
      nearbyLocations: [],
    },
  },
  {
    id: 5,
    state: "Dulles",
    stateAbbreviation: "VA",
    city: "Dulles",
    country: "USA",
    gps: "0,0",
    image:
      "https://northernvirginiamag.com/wp-content/uploads/2018/09/fall-skyline.jpg",
    suggestions: {
      transportation: {
        ignore: false,
        rentals: [],
        publicTransportation: [],
        flights: [],
      },
      housing: {
        ignore: false,
        hotels: [],
        bnbs: [],
        camping: [],
      },
      activities: {
        ignore: false,
        scenic: [],
        restaurants: [],
        museums: [],
        tours: [],
        nightlife: [],
        bars: [],
      },
      nearbyLocations: [],
    },
  },
  {
    id: 6,
    state: null,
    stateAbbreviation: null,
    city: "Tokyo",
    country: "Japan",
    gps: "0,0",
    image:
      "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/Japan/Tokyo/tokyo-guide-shopping-lead.jpg",
    suggestions: {
      transportation: {
        ignore: false,
        rentals: [],
        publicTransportation: [],
        flights: [],
      },
      housing: {
        ignore: false,
        hotels: [],
        bnbs: [],
        camping: [],
      },
      activities: {
        ignore: false,
        scenic: [],
        restaurants: [],
        museums: [],
        tours: [],
        nightlife: [],
        bars: [],
      },
      nearbyLocations: [],
    },
  },
  {
    id: 7,
    state: null,
    stateAbbreviation: null,
    city: "Osaka",
    country: "Japan",
    gps: "0,0",
    image:
      "https://byfood.b-cdn.net/api/public/assets/9503/content?optimizer=image",
    suggestions: {
      transportation: {
        ignore: false,
        rentals: [],
        publicTransportation: [],
        flights: [],
      },
      housing: {
        ignore: false,
        hotels: [],
        bnbs: [],
        camping: [],
      },
      activities: {
        ignore: false,
        scenic: [],
        restaurants: [],
        museums: [],
        tours: [],
        nightlife: [],
        bars: [],
      },
      nearbyLocations: [],
    },
  },
  {
    id: 8,
    state: null,
    stateAbbreviation: null,
    city: "Kyoto",
    country: "Japan",
    gps: "0,0",
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/10/29/d5/01.jpg",
    suggestions: {
      transportation: {
        ignore: false,
        rentals: [],
        publicTransportation: [],
        flights: [],
      },
      housing: {
        ignore: false,
        hotels: [],
        bnbs: [],
        camping: [],
      },
      activities: {
        ignore: false,
        scenic: [],
        restaurants: [],
        museums: [],
        tours: [],
        nightlife: [],
        bars: [],
      },
      nearbyLocations: [],
    },
  },
  {
    id: 9,
    state: "Florida",
    stateAbbreviation: "FL",
    city: "Miami",
    country: "USA",
    gps: "0,0",
    image:
      "https://image-tc.galaxy.tf/wijpeg-2f2lzg4puwgvgni41yc76biev/resized.jpg?width=1920",
    suggestions: {
      transportation: {
        ignore: false,
        rentals: [],
        publicTransportation: [],
        flights: [],
      },
      housing: {
        ignore: false,
        hotels: [],
        bnbs: [],
        camping: [],
      },
      activities: {
        ignore: false,
        scenic: [],
        restaurants: [],
        museums: [],
        tours: [],
        nightlife: [],
        bars: [],
      },
      nearbyLocations: [11, 12],
    },
  },
  {
    id: 10,
    state: "New York",
    stateAbbreviation: "NY",
    city: "Manhatten",
    country: "USA",
    gps: "0,0",
    image:
      "https://www.sherrynetherland.com/resources/media/user/1487788417-midtown-manhattan.jpg",
    suggestions: {
      transportation: {
        ignore: false,
        rentals: [],
        publicTransportation: [],
        flights: [],
      },
      housing: {
        ignore: false,
        hotels: [],
        bnbs: [],
        camping: [],
      },
      activities: {
        ignore: false,
        scenic: [],
        restaurants: [],
        museums: [],
        tours: [],
        nightlife: [],
        bars: [],
      },
      nearbyLocations: [],
    },
  },
  {
    id: 11,
    state: "Florida",
    stateAbbreviation: "FL",
    city: "Fort Lauderdale",
    country: "USA",
    gps: "0,0",
    image:
      "https://media.cntraveler.com/photos/58504247ada6b88679ec4997/16:9/w_2560%2Cc_limit/ft-lauderdale-GettyImages-478520916.jpg",
    suggestions: {
      transportation: {
        ignore: false,
        rentals: [],
        publicTransportation: [],
        flights: [],
      },
      housing: {
        ignore: false,
        hotels: [],
        bnbs: [],
        camping: [],
      },
      activities: {
        ignore: false,
        scenic: [],
        restaurants: [],
        museums: [],
        tours: [],
        nightlife: [],
        bars: [],
      },
      nearbyLocations: [9],
    },
  },
  {
    id: 12,
    state: "Florida",
    stateAbbreviation: "FL",
    city: "Pompano",
    country: "USA",
    gps: "0,0",
    image:
      "https://donnahup.com/wp-content/uploads/2021/09/IMG_2718-scaled.jpg",
    suggestions: {
      transportation: {
        ignore: false,
        rentals: [],
        publicTransportation: [],
        flights: [],
      },
      housing: {
        ignore: false,
        hotels: [],
        bnbs: [],
        camping: [],
      },
      activities: {
        ignore: false,
        scenic: [],
        restaurants: [],
        museums: [],
        tours: [],
        nightlife: [],
        bars: [],
      },
      nearbyLocations: [9, 11],
    },
  },
  {
    id: 13,
    state: "California",
    stateAbbreviation: "CA",
    city: "San Francisco",
    country: "USA",
    gps: "0,0",
    image:
      "https://www.timeshighereducation.com/sites/default/files/styles/article785xauto/public/student-universe-san-francisco_web_0.jpg?itok=ua4_jXlr",
    suggestions: {
      transportation: {
        ignore: false,
        rentals: [],
        publicTransportation: [],
        flights: [],
      },
      housing: {
        ignore: false,
        hotels: [],
        bnbs: [],
        camping: [],
      },
      activities: {
        ignore: false,
        scenic: [],
        restaurants: [],
        museums: [],
        tours: [],
        nightlife: [],
        bars: [],
      },
      nearbyLocations: [1, 2],
    },
  },
];

const mockLocationsArray = mockLocations.map((location) => ({
  value: String(location.id),
  label: `${location.city}, ${location.stateAbbreviation || location.country}`,
}));
