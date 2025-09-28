import { RootStackScreenProps } from '@types'
import { FC } from 'react'
import { View } from 'react-native'
import { ScreenNames } from '@constants'
import DetailsContent from '../components/DetailsContent.tsx'
import DetailsFooter from '../components/DetailsFooter.tsx'
import { useActivity, useAddToFavorites } from '@entities/activity'

type ActivityDetailsProps = RootStackScreenProps<ScreenNames.ACTIVITY_DETAILS>

const ActivityDetailsScreen: FC<ActivityDetailsProps> = ({ route }) => {
  const { id } = route.params!
  const { data: activity } = useActivity(id)
  const addToFavoritesMutation = useAddToFavorites()

  const handleAddToFavorite = () => {
    addToFavoritesMutation.mutate({ id })
  }
  return (
    <View className="flex-1 bg-white">
      <DetailsContent activity={activity} />
      <DetailsFooter onFavoritePress={handleAddToFavorite} />
    </View>
  )
}

export default ActivityDetailsScreen
