import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { mmkvStorage } from './storage'
import { createFavoritesSlice, FavoritesSlice } from './slices/favoritesSlice'

export type AppState = FavoritesSlice

export const useAppStore = create<AppState>()(
  persist(
    (...a) => ({
      ...createFavoritesSlice(...a),
    }),
    {
      name: 'activities-store',
      storage: mmkvStorage as any,
      partialize: (state: AppState) =>
        ({
          favorites: state.favorites,
        }) as Partial<AppState>,
    },
  ),
)
