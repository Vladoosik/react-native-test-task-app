import { BASE_URL } from '@constants'
import { Activity, AddToFavoritesRequest, AddToFavoritesResponse } from '@types'

class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string = BASE_URL) {
    this.baseUrl = baseUrl
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`

    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        const errorData = (await response.json().catch(() => ({}))) as {
          error?: string
        }
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`,
        )
      }

      return (await response.json()) as T
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error('An unexpected error occurred')
    }
  }

  async getActivities(): Promise<Activity[]> {
    return this.request<Activity[]>('/activities')
  }

  async addToFavorites(
    data: AddToFavoritesRequest,
  ): Promise<AddToFavoritesResponse> {
    return this.request<AddToFavoritesResponse>('/favorites', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }
}

export const apiClient = new ApiClient()
export default apiClient
