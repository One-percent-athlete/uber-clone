import { LocationStore } from "@/types/type";
import { create } from 'zustand';

export const useLocationStore = create<LocationStore>((set) => ({
    userAddress: null,
    userLongitude: null,
    userAddress: null,
    destinationLongitude: null,
    destinationLatitude: null,
　})
);
