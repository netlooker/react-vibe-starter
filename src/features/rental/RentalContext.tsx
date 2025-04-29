import React, { createContext, useContext, useState, ReactNode } from "react";
import { Bike } from "../bikes/bikeData";

export type RentalPeriod = "hourly" | "daily" | "weekly";

export interface RentalItem {
  bike: Bike;
  startDate: Date;
  endDate: Date;
  period: RentalPeriod;
  quantity: number;
}

interface RentalContextType {
  rentalItems: RentalItem[];
  addRentalItem: (item: RentalItem) => void;
  removeRentalItem: (bikeId: string) => void;
  updateRentalItem: (bikeId: string, updates: Partial<RentalItem>) => void;
  clearRentalItems: () => void;
  calculateTotal: () => number;
}

const RentalContext = createContext<RentalContextType | undefined>(undefined);

export const RentalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [rentalItems, setRentalItems] = useState<RentalItem[]>([]);

  const addRentalItem = (item: RentalItem) => {
    // Check if bike is already in rental items
    const existingItemIndex = rentalItems.findIndex(
      (rentalItem) => rentalItem.bike.id === item.bike.id
    );

    if (existingItemIndex >= 0) {
      // Update existing item
      const updatedItems = [...rentalItems];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        ...item,
      };
      setRentalItems(updatedItems);
    } else {
      // Add new item
      setRentalItems([...rentalItems, item]);
    }
  };

  const removeRentalItem = (bikeId: string) => {
    setRentalItems(rentalItems.filter((item) => item.bike.id !== bikeId));
  };

  const updateRentalItem = (bikeId: string, updates: Partial<RentalItem>) => {
    setRentalItems(
      rentalItems.map((item) =>
        item.bike.id === bikeId ? { ...item, ...updates } : item
      )
    );
  };

  const clearRentalItems = () => {
    setRentalItems([]);
  };

  const calculateTotal = () => {
    return rentalItems.reduce((total, item) => {
      const { bike, period, quantity } = item;
      let rate = 0;

      switch (period) {
        case "hourly":
          rate = bike.hourlyRate;
          break;
        case "daily":
          rate = bike.dailyRate;
          break;
        case "weekly":
          rate = bike.weeklyRate;
          break;
      }

      return total + rate * quantity;
    }, 0);
  };

  return (
    <RentalContext.Provider
      value={{
        rentalItems,
        addRentalItem,
        removeRentalItem,
        updateRentalItem,
        clearRentalItems,
        calculateTotal,
      }}
    >
      {children}
    </RentalContext.Provider>
  );
};

export const useRental = (): RentalContextType => {
  const context = useContext(RentalContext);
  if (context === undefined) {
    throw new Error("useRental must be used within a RentalProvider");
  }
  return context;
};