import { StackScreenProps } from '@react-navigation/stack'
import { ScreenNames } from '@constants'

export type RootStackParamList = {
  [ScreenNames.HOME]: undefined
  [ScreenNames.ACTIVITY_DETAILS]: {
    id: number
  }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>
