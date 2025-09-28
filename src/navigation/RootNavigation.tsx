import { createStackNavigator } from '@react-navigation/stack'
import { ScreenNames } from '@constants'
import type { RootStackParamList } from '@types'
import { ActivityDetailsScreen, HomeScreen } from '@features'
import { ButtonIcon } from '@shared'

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
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => <ButtonIcon onPress={navigation.goBack} />,
        })}
      />
    </Stack.Navigator>
  )
}

export default RootNavigation
