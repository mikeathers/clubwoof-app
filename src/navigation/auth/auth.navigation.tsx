import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Register} from '@/screens'

const Stack = createNativeStackNavigator()

export const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Register'}
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
