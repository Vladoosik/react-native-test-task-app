import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'
import { Activity } from '@types'
import { FireIcon, MapPinIcon, StarIcon } from '@svg'
import FallBackImage from '@components/common/FallBackImage.tsx'

type ActivityProps = {
  activity: Activity
  onCardPress: () => void
  isFavorite?: boolean
}

const ActivityCard: FC<ActivityProps> = ({
  activity,
  onCardPress,
  isFavorite,
}) => {
  return (
    <Pressable
      onPress={onCardPress}
      className="shadow-sm border border-gray-100 mb-4 overflow-hidden gap-[2px]"
    >
      <FallBackImage
        uri={activity.photoUrl}
        className="w-full h-48 overflow-hidden"
        roundedCorners="all"
        borderRadius={20}
      />
      {isFavorite && (
        <View className="absolute top-5 left-5 p-[6px] rounded-full bg-yellow">
          <FireIcon />
        </View>
      )}
      <View className="bg-neutral-10 p-4 rounded-[20px]">
        <View className="flex-row justify-between items-start">
          <Text className="text-[16px] font-abel">{activity.name}</Text>
          <View className="flex-row items-center">
            <StarIcon />
            <Text className="text-sm font-medium">{activity.rating}</Text>
          </View>
        </View>
        <View className="flex-row items-center justify-between mt-[12px]">
          <View className="flex-row items-center gap-[6px]">
            <MapPinIcon />
            <Text className="text-[12px]">{activity.location}</Text>
          </View>
          <View className="flex-row items-center gap-[4px]">
            <Text className="font-abel">${activity.price}</Text>
            <Text className="text-[12px] text-neutral-75">/ night</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

export default ActivityCard
