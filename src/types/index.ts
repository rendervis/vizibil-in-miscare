export type UserRole = "business" | "driver";

export type DemoVehicle = {
  id: string;
  make: string;
  model: string;
  year: number;
  body: string;
  areas: string[];
  activeWindow: string;
  weeklyCoverageMin: number;
  weeklyCoverageMax: number;
  routeConfidence: number;
  price: number;
  driverReward: number;
  accent: "lime" | "violet" | "mint" | "rose";
};
