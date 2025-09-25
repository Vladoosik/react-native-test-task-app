import { useActivity, useAddToFavorites } from '@api'
import { RootStackScreenProps } from '@types'
import { FC } from 'react'
import { ButtonIcon, FallbackImage, MainButton } from '@components'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ArrowLeft } from '@svg'
import { ScreenNames } from '@constants'
import { useFavorites } from '@store/hooks'

type ActivityDetailsProps = RootStackScreenProps<ScreenNames.ACTIVITY_DETAILS>

const ActivityDetailsScreen: FC<ActivityDetailsProps> = ({
  navigation,
  route,
}) => {
  const { id } = route.params!
  const { data: activity } = useActivity(id)
  const insets = useSafeAreaInsets()
  const addToFavoritesMutation = useAddToFavorites()
  const { isFavorite, removeFromFavorites } = useFavorites()

  const isActivityFavorite = isFavorite(id)

  const handleGoBack = () => navigation.goBack()

  const handleToggleFavorite = () => {
    if (isActivityFavorite) {
      removeFromFavorites(id)
    } else {
      addToFavoritesMutation.mutate({ id })
    }
  }
  return (
    <View className="flex-1 bg-white">
      <FallbackImage
        className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden"
        uri={activity?.photoUrl}
        roundedCorners="bottom"
        borderRadius={20}
      />

      <ButtonIcon
        onPress={handleGoBack}
        className="absolute left-2 sm:left-3 md:left-4"
        style={{ top: insets.top + 8 }}
      >
        <ArrowLeft />
      </ButtonIcon>

      <View className="flex-1 p-3 sm:p-4">
        <Text className="text-xl sm:text-2xl font-abel leading-tight">
          {activity?.name}
        </Text>
        <View className="mt-3 sm:mt-4 flex-row items-center justify-between">
          <Text className="text-sm sm:text-base font-abel">
            ${activity?.price.toFixed(2)}
          </Text>
          <Text className="text-xs text-neutral-75 text-right flex-1 ml-2">
            Included taxes and fees
          </Text>
        </View>

        <View className="flex-grow">
          <View className="w-full h-[1px] bg-neutral-15 mt-3 sm:mt-4 mb-3 sm:mb-4" />
          <Text className="font-abel text-sm sm:text-base">Description</Text>
          <Text className="text-xs sm:text-sm mt-2 sm:mt-[10px] text-neutral-25 leading-relaxed">
            {activity?.description}
          </Text>
          <View className="w-full h-[1px] bg-neutral-15 mt-3 sm:mt-4 mb-3 sm:mb-4" />
        </View>
      </View>

      <View
        style={{ paddingBottom: insets.bottom + 5 }}
        className="px-3 sm:px-4 pb-2 sm:pb-4"
      >
        <MainButton
          onPress={handleToggleFavorite}
          activeOpacity={0.7}
          text={
            isActivityFavorite ? 'Remove from favorites' : 'Add to favorites'
          }
        />
      </View>
    </View>
  )
}

export default ActivityDetailsScreen
