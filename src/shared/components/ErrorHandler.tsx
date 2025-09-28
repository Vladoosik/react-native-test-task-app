import { FC } from 'react'
import { Text, View } from 'react-native'

interface ErrorHandlerProps {
  error: Error
}

const ErrorHandler: FC<ErrorHandlerProps> = ({ error }) => {
  return (
    <View className="flex-1 justify-center items-center bg-white px-5">
      <Text className="text-lg text-red-600 text-center">
        Error: {error.message}
      </Text>
    </View>
  )
}

export default ErrorHandler
