import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiClient } from './client'
import { AddToFavoritesRequest } from '@types'
import { useAppStore } from '@store'
import Toast from 'react-native-toast-message'

export const queryKeys = {
  activities: ['activities'] as const,
  favorites: ['favorites'] as const,
} as const

export const useActivities = () => {
  return useQuery({
    queryKey: queryKeys.activities,
    queryFn: () => apiClient.getActivities(),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  })
}

export const useAddToFavorites = () => {
  const queryClient = useQueryClient()
  const addToFavorites = useAppStore((state: any) => state.addToFavorites)

  return useMutation({
    mutationFn: (data: AddToFavoritesRequest) => apiClient.addToFavorites(data),
    onSuccess: (_, variables) => {
      addToFavorites(variables.id)

      queryClient.invalidateQueries({ queryKey: queryKeys.activities })
    },
    onError: () => {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong, please try again',
      })
    },
  })
}

export const useActivity = (id: number) => {
  const { data: activities, ...rest } = useActivities()

  const activity = activities?.find(activity => activity.id === id)

  return {
    data: activity,
    ...rest,
  }
}
