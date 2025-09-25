import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClientProvider } from '@tanstack/react-query'
import RootNavigation from '@navigation/RootNavigation'
import { queryClient } from '@lib'
import './global.css'
import Toast from 'react-native-toast-message'

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar backgroundColor="transparent" translucent />
        <GestureHandlerRootView>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </GestureHandlerRootView>
        <Toast
          topOffset={40}
          visibilityTime={1000}
          ref={ref => Toast.setRef(ref)}
        />
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}

export default App
