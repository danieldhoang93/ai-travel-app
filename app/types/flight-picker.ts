export type StopValues = "any" | "0" | "1" | "2";
export type Cabins = "basic" | "economy" | "business" | "first";
export type Bags = {
  checked: number;
  carryOn: number;
};

export type FlightPickerOptions = {
  stops: StopValues;
  bags: Bags;
  airlines: [];
  maxPrice: number;
  maxDuration: number;
  cabin: Cabins;
};

export type FlightTypes =
  | "Round-trip"
  | "One-way"
  | "Different return location";
