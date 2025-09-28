import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { activityApi } from './client'
import { AddToFavoritesRequest } from '../model/types'
import Toast from 'react-native-toast-message'

export const queryKeys = {
  activities: ['activities'] as const,
  favorites: ['favorites'] as const,
}

export const useActivities = () => {
  return useQuery({
    queryKey: queryKeys.activities,
    queryFn: activityApi.getActivities,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  })
}

export const useActivity = (id: number) => {
  const { data: activities, ...rest } = useActivities()
  const activity = activities?.find(a => a.id === id)
  return { data: activity, ...rest }
}

export const useAddToFavorites = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: AddToFavoritesRequest) =>
      activityApi.addToFavorites(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.activities })
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Activity added to favorite',
      })
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
