import React from 'react'
import {openInbox} from 'react-native-email-link'

import {
  CompleteRegisterImage,
  OpenMailAppButton,
  SignUpComplete,
  SignUpCompleteContainer,
} from './register.styles'

export const RegistrationCompleteComponent: React.FC = () => {
  const openMailApp = () => openInbox()
  return (
    <SignUpCompleteContainer>
      <CompleteRegisterImage source={require('./assets/registration-complete.png')} />
      <SignUpComplete>
        Sign up complete! Go ahead and check your inbox to confirm your email address.
      </SignUpComplete>
      <OpenMailAppButton onPress={openMailApp}>Open mail app</OpenMailAppButton>
    </SignUpCompleteContainer>
  )
}
