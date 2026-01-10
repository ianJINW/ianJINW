import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

export interface UI {
  theme: 'light' | 'dark';

  setTheme: () => void;
}

const useUIStore = create<UI>()(
  persist(
    (set, get) => ({
      theme: 'light',

      setTheme: () => set({ theme: get().theme === 'light' ? 'dark' : "light" })
    }), {
    name: 'uiStorage',
    storage: createJSONStorage(() => localStorage)
  }
  )
)

export default useUIStore