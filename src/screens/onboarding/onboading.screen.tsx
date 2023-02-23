import React from 'react'

import {Image, Text, View} from './onboarding.styles'

export const Onboarding: React.FC = () => {
  return (
    <View>
      <Image source={require('./cover.png')} />
      <Text>hello world!</Text>
    </View>
  )
}
