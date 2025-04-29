export interface Bike {
  id: string;
  name: string;
  type: BikeType;
  description: string;
  hourlyRate: number;
  dailyRate: number;
  weeklyRate: number;
  imageUrl: string;
  available: boolean;
  features: string[];
  size: BikeSize;
  location: string;
  rating: number;
}

export enum BikeType {
  MOUNTAIN = "Mountain",
  ROAD = "Road",
  HYBRID = "Hybrid",
  ELECTRIC = "Electric",
  CITY = "City",
  KIDS = "Kids",
}

export enum BikeSize {
  SMALL = "Small",
  MEDIUM = "Medium",
  LARGE = "Large",
}

export const bikes: Bike[] = [
  {
    id: "bike-1",
    name: "Mountain Explorer X3",
    type: BikeType.MOUNTAIN,
    description: "A rugged mountain bike perfect for off-road adventures. Features front suspension, disc brakes, and all-terrain tires.",
    hourlyRate: 8,
    dailyRate: 35,
    weeklyRate: 140,
    imageUrl: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    available: true,
    features: ["Front Suspension", "Disc Brakes", "21 Speeds", "Aluminum Frame"],
    size: BikeSize.MEDIUM,
    location: "Downtown",
    rating: 4.7,
  },
  {
    id: "bike-2",
    name: "City Cruiser",
    type: BikeType.CITY,
    description: "Comfortable city bike with upright riding position. Perfect for commuting and leisure rides around town.",
    hourlyRate: 6,
    dailyRate: 25,
    weeklyRate: 100,
    imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    available: true,
    features: ["Step-Through Frame", "Basket", "Fenders", "7 Speeds", "Comfortable Seat"],
    size: BikeSize.MEDIUM,
    location: "Riverside",
    rating: 4.5,
  },
  {
    id: "bike-3",
    name: "Road Racer Pro",
    type: BikeType.ROAD,
    description: "Lightweight road bike designed for speed and efficiency on paved roads. Perfect for fitness enthusiasts and long-distance riders.",
    hourlyRate: 10,
    dailyRate: 45,
    weeklyRate: 180,
    imageUrl: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    available: true,
    features: ["Carbon Fiber Frame", "Drop Handlebars", "18 Speeds", "Lightweight Design"],
    size: BikeSize.LARGE,
    location: "Eastside",
    rating: 4.9,
  },
  {
    id: "bike-4",
    name: "E-Bike Commuter",
    type: BikeType.ELECTRIC,
    description: "Electric bike with pedal assist up to 20mph. Makes commuting a breeze with a range of 40 miles on a single charge.",
    hourlyRate: 15,
    dailyRate: 60,
    weeklyRate: 250,
    imageUrl: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    available: true,
    features: ["Electric Motor", "Removable Battery", "LCD Display", "Integrated Lights", "Rear Rack"],
    size: BikeSize.MEDIUM,
    location: "Downtown",
    rating: 4.8,
  },
  {
    id: "bike-5",
    name: "Hybrid Pathfinder",
    type: BikeType.HYBRID,
    description: "Versatile hybrid bike that performs well on both pavement and light trails. Great for recreational riders and commuters.",
    hourlyRate: 7,
    dailyRate: 30,
    weeklyRate: 120,
    imageUrl: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    available: true,
    features: ["Front Suspension", "Upright Position", "24 Speeds", "Hydraulic Disc Brakes"],
    size: BikeSize.SMALL,
    location: "Westside",
    rating: 4.6,
  },
  {
    id: "bike-6",
    name: "Kids Adventure",
    type: BikeType.KIDS,
    description: "Durable and fun bike for children aged 8-12. Features easy-to-use gears and reliable brakes for safe riding.",
    hourlyRate: 5,
    dailyRate: 20,
    weeklyRate: 80,
    imageUrl: "https://images.unsplash.com/photo-1599056407101-7c557a4a0144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    available: true,
    features: ["Adjustable Height", "Safety Reflectors", "6 Speeds", "Lightweight Frame"],
    size: BikeSize.SMALL,
    location: "Parkside",
    rating: 4.4,
  },
];

export const getAvailableBikes = (): Bike[] => {
  return bikes.filter(bike => bike.available);
};

export const getBikeById = (id: string): Bike | undefined => {
  return bikes.find(bike => bike.id === id);
};

export const getBikesByType = (type: BikeType): Bike[] => {
  return bikes.filter(bike => bike.type === type);
};