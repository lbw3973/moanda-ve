import { create } from "zustand";

interface IScreenSizeStore {
  isMobileView: boolean;
  setScreenSize: (status: boolean) => void;
}

const screenSizeStore = create<IScreenSizeStore>(set => ({
  isMobileView: window.innerWidth < 769,
  setScreenSize: (status: boolean) => set({ isMobileView: status }),
}));

export const useScreenSizeStore = () => screenSizeStore(state => state);
