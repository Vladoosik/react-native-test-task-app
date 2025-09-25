import { FlatList, SafeAreaView, Text, View } from 'react-native'
import { useActivities } from '@api/hooks'
import { Activity, RootStackScreenProps } from '@types'
import { FC, useCallback } from 'react'
import { ActivityCard } from '@components'
import { useFavorites } from '@store/hooks'
import { ScreenNames } from '@constants'

type HomeScreenProps = RootStackScreenProps<ScreenNames.HOME>

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const { data: activities, isLoading, error } = useActivities()
  const { isFavorite } = useFavorites()

  const renderItem = useCallback(
    ({ item }: { item: Activity }) => (
      <ActivityCard
        isFavorite={isFavorite(item.id)}
        onCardPress={() => handleDetailsNavigation(item.id)}
        activity={item}
      />
    ),
    [],
  )

  const handleDetailsNavigation = useCallback((id: number) => {
    navigation.navigate(ScreenNames.ACTIVITY_DETAILS, {
      id,
    })
  }, [])

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-lg text-gray-600">Loading activities...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-white px-5">
        <Text className="text-lg text-red-600 text-center">
          Error: {error.message}
        </Text>
      </View>
    )
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 sm:px-5 py-3 sm:py-4 bg-primary-50">
        <Text className="text-xl sm:text-2xl text-center font-abel">Activities</Text>
      </View>
      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        className="flex-1"
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
