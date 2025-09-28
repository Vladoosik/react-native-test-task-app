import { ApiClient } from '@api'
import {
  Activity,
  AddToFavoritesRequest,
  AddToFavoritesResponse,
} from '../model/types.ts'

const client = new ApiClient()

export const activityApi = {
  getActivities: (): Promise<Activity[]> => client.request('/activities'),
  addToFavorites: (
    data: AddToFavoritesRequest,
  ): Promise<AddToFavoritesResponse> =>
    client.request('/favorites', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
}
