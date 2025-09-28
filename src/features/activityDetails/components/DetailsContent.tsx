import { Text, View } from 'react-native'
import { FC } from 'react'
import { FallBackImage } from '@shared'
import { Activity } from '@entities/activity'

interface DetailsContentProps {
  activity?: Activity
}

const DetailsContent: FC<DetailsContentProps> = ({ activity }) => {
  return (
    <>
      <FallBackImage
        className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-b-2xl"
        uri={activity?.photoUrl}
      />
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
    </>
  )
}

export default DetailsContent
