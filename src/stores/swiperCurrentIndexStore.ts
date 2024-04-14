import { create } from "zustand";

interface ISwiperCurrntIndexStore {
  currentIndex: number;
  setCurrentIndex: (status: number) => void;
}

const swiperCurrentIndexStore = create<ISwiperCurrntIndexStore>(set => ({
  currentIndex: 0,
  setCurrentIndex: (status: number) => set({ currentIndex: status }),
}));

export const useSwiperCurrentIndexStore = () => swiperCurrentIndexStore(state => state);
