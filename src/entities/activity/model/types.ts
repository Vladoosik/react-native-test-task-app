export interface Activity {
  id: number
  photoUrl: string
  name: string
  description: string
  location: string
  price: number
  rating: number
}

export interface AddToFavoritesRequest {
  id: number
}

export interface AddToFavoritesResponse {
  message: string
}

export interface ApiError {
  error: string
}

export type ActivitiesResponse = Activity[]
export type FavoritesResponse = AddToFavoritesResponse
