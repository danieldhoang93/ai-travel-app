import { StopValues } from "~/types/flight-picker";

export const stopsLabelMap: Record<string, string> = {
  any: "Any number of stops",
  "0": "Nonstop",
  "1": "1 stop",
  "2": "2+ stops",
};

export const cabinsMap: Record<string, string> = {
  basic: "Basic economy",
  economy: "Economy",
  business: "Business",
  first: "First class",
};

export const flightTypeMap: Record<string, string> = {
  roundTrip: "Round-trip",
  oneWay: "One-way",
  different: "Different return location",
};

export const cabinOptions = Object.entries(cabinsMap).map(([value, label]) => ({
  value,
  label,
}));

//https://companieslogo.com/delta-air-lines/logo/
export const AIRLINE_LOGOS: Record<string, string> = {
  Delta: "https://companieslogo.com/img/orig/DAL-3ea1d23b.png?t=1648913453",
  Spirit: "https://companieslogo.com/img/orig/SAVE-b500775f.png?t=1602678222",
  Jetblue: "https://companieslogo.com/img/orig/JBLU-28755714.png?t=1650192342",
  "United Airlines":
    "https://companieslogo.com/img/orig/UAL-44813086.png?t=1649480773",
};

export const airlineOptions = Object.keys(AIRLINE_LOGOS).map((airline) => ({
  value: airline,
  label: airline,
}));
