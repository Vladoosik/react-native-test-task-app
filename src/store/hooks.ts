import { useAppStore } from './index'

export const useFavorites = () => {
  const favorites = useAppStore(state => state.favorites)
  const addToFavorites = useAppStore(state => state.addToFavorites)
  const removeFromFavorites = useAppStore(state => state.removeFromFavorites)
  const toggleFavorite = useAppStore(state => state.toggleFavorite)
  const isFavorite = useAppStore(state => state.isFavorite)

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
  }
}
