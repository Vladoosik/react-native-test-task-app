import { FC, useCallback } from 'react'
import { FlatList } from 'react-native'
import ActivityCard from './ActivityCard.tsx'
import { Activity } from '@entities/activity'

interface ActivityListProps {
  activities?: Activity[]
  onCardPress: (id: number) => void
}

const ActivityList: FC<ActivityListProps> = ({ activities, onCardPress }) => {
  const renderItem = useCallback(
    ({ item }: { item: Activity }) => (
      <ActivityCard onCardPress={() => onCardPress(item.id)} activity={item} />
    ),
    [],
  )

  return (
    <FlatList
      data={activities}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      className="flex-1"
      contentContainerStyle={{ padding: 20 }}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default ActivityList
