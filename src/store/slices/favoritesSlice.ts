import { StateCreator } from 'zustand'

export interface FavoritesSlice {
  favorites: number[]
  addToFavorites: (id: number) => void
  removeFromFavorites: (id: number) => void
  toggleFavorite: (id: number) => void
  isFavorite: (id: number) => boolean
}

export const createFavoritesSlice: StateCreator<
  FavoritesSlice,
  [],
  [],
  FavoritesSlice
> = (set, get) => ({
  favorites: [],

  addToFavorites: (id: number) => {
    const { favorites } = get()
    if (!favorites.includes(id)) {
      set({ favorites: [...favorites, id] })
    }
  },

  removeFromFavorites: (id: number) => {
    const { favorites } = get()
    set({
      favorites: favorites.filter((favoriteId: number) => favoriteId !== id),
    })
  },

  toggleFavorite: (id: number) => {
    const { favorites, addToFavorites, removeFromFavorites } = get()
    if (favorites.includes(id)) {
      removeFromFavorites(id)
    } else {
      addToFavorites(id)
    }
  },

  isFavorite: (id: number) => {
    const { favorites } = get()
    return favorites.includes(id)
  },
})
