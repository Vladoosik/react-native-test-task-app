import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'
import { FallBackImage, Icon } from '@shared/components'
import { Activity } from '@entities/activity'

type ActivityProps = {
  activity: Activity
  onCardPress: () => void
}

const ActivityCard: FC<ActivityProps> = ({ activity, onCardPress }) => {
  return (
    <Pressable
      onPress={onCardPress}
      className="shadow-sm border border-gray-100 mb-4 overflow-hidden gap-[2px]"
    >
      <FallBackImage
        className="h-48 w-full rounded-2xl overflow-hidden"
        uri={activity.photoUrl}
      />
      <View className="bg-neutral-10 p-4 rounded-[20px]">
        <View className="flex-row justify-between items-start">
          <Text className="text-[16px] font-abel">{activity.name}</Text>
          <View className="flex-row items-center">
            <Icon name="star" size={16} fill="#FED138" />
            <Text className="text-sm font-medium">{activity.rating}</Text>
          </View>
        </View>
        <View className="flex-row items-center justify-between mt-[12px]">
          <View className="flex-row items-center gap-[6px]">
            <Icon
              name="mapPin"
              size={16}
              fill="#000"
              stroke="#F7F7F7"
              strokeWidth={2}
            />
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
