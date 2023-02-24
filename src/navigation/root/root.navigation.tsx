import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import React, {useEffect} from 'react'

import {useAuthOld} from '@/auth'
import {AuthNavigation} from '@/navigation/auth'
import {NavigationContainer} from '@/navigation/navigation-container'

const Stack = createNativeStackNavigator()

const RootNavigation: React.FC = () => {
  const {state} = useAuthOld()

  useFonts({
    Neucha: require('../../../assets/fonts/Neucha-Regular.ttf'),
    Helvetica: require('../../../assets/fonts/helvetica.ttf'),
  })

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync()
  //   }
  // }, [fontsLoaded])

  // const {needsOnboarding} = useOnboarding()

  const hideSplash = React.useCallback(async () => {
    await SplashScreen.hideAsync()
  }, [])

  useEffect(() => {
    if (!state.isIdle) {
      hideSplash()
    }
    console.log({state})
  }, [hideSplash, state])
  // console.log({needsOnboarding})
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: 'slide_from_bottom',
      }}
    >
      <Stack.Screen name={'Authentication'} component={AuthNavigation} />
    </Stack.Navigator>
  )
}

export const RootNavigator = () => (
  <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
)
