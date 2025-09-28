import { SafeAreaView } from 'react-native'
import { FC } from 'react'
import HomeHeader from '../components/HomeHeader.tsx'
import ActivityList from '../components/ActivityList.tsx'
import { ErrorHandler, Loader } from '@shared'
import { RootStackScreenProps } from '@types'
import { ScreenNames } from '@constants'
import { useActivities } from '@entities/activity'

type HomeScreenProps = RootStackScreenProps<ScreenNames.HOME>

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const { data: activities, isLoading, error } = useActivities()

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <ErrorHandler error={error} />
  }

  const handleDetailsNavigate = (id: number) => {
    navigation.navigate(ScreenNames.ACTIVITY_DETAILS, {
      id,
    })
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <HomeHeader />
      <ActivityList
        activities={activities}
        onCardPress={handleDetailsNavigate}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
