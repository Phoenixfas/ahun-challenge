import create from "zustand";

interface TimeframeState {
  activeTimeframe: string,
  setActiveTimeframe: (activeTimeframe: string) => void;
}

const useStore = create<TimeframeState>((set) => ({
  activeTimeframe: "daily",
  setActiveTimeframe: (value) => 
  set((state) => ({ 
    activeTimeframe: value 
  })),
}));

export default useStore;