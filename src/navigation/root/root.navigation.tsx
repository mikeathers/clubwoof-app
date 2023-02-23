import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import React, {useEffect} from 'react'

import {useAuth} from '@/auth'
import {useOnboarding} from '@/hooks'
import {NavigationContainer} from '@/navigation/navigation-container'
import {Register} from '@/screens'
import {CompleteRegistrationComponent} from '@/screens/auth/complete-registration'

const Stack = createNativeStackNavigator()

const RootNavigation: React.FC = () => {
  const {
    state: {isIdle},
  } = useAuth()

  useFonts({
    Neucha: require('../../../assets/fonts/Neucha-Regular.ttf'),
    Helvetica: require('../../../assets/fonts/helvetica.ttf'),
  })

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync()
  //   }
  // }, [fontsLoaded])

  const {needsOnboarding} = useOnboarding()

  const hideSplash = React.useCallback(async () => {
    await SplashScreen.hideAsync()
  }, [])

  useEffect(() => {
    if (!isIdle) {
      hideSplash()
    }
  }, [hideSplash, isIdle])
  console.log({needsOnboarding})
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: 'slide_from_bottom',
      }}
    >
      <Stack.Group>
        <Stack.Screen name={'Register'} component={Register} />
        <Stack.Screen
          name={'RegistrationComplete'}
          component={CompleteRegistrationComponent}
        />
      </Stack.Group>
      {/*{needsOnboarding ? <Stack.Screen name="Onboarding" component={Onboarding} /> : null}*/}
    </Stack.Navigator>
  )
}

export const RootNavigator = () => (
  <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
)
