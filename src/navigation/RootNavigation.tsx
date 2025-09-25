import { createStackNavigator } from '@react-navigation/stack'
import { ActivityDetailsScreen, HomeScreen } from '@screens'
import { ScreenNames } from '@constants'
import type { RootStackParamList } from '@types'

const Stack = createStackNavigator<RootStackParamList>()

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNames.ACTIVITY_DETAILS}
        component={ActivityDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default RootNavigation
