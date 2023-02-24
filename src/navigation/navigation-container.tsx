import {NavigationContainer as RNNavigationContainer} from '@react-navigation/native'
// import * as Linking from 'expo-linking'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'

// const prefix = Linking.createURL('/')

export const NavigationContainer = ({children}: {children: React.ReactNode}) => {
  // const linking = {
  //   prefixes: [prefix],
  //   config: {
  //     screens: {
  //       Register: 'register',
  //       RegistrationComplete: 'registrationComplete',
  //     },
  //   },
  // }
  return (
    <SafeAreaProvider>
      <RNNavigationContainer>{children}</RNNavigationContainer>
    </SafeAreaProvider>
  )
}
