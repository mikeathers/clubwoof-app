import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Register, SignIn} from '@/screens'

export type AuthStackParamList = {
  SignIn: undefined
  Register: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

export const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name={'SignIn'} component={SignIn} />
        <Stack.Screen name={'Register'} component={Register} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
