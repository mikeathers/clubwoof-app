import React from 'react'

import type {StyledButtonProps} from './button.styles'
import {ActivityIndicator, StyledButton, Text} from './button.styles'

export const Button: React.FC<StyledButtonProps> = (props) => {
  const {children, loading, ...rest} = props

  return (
    <StyledButton {...rest} variant={props.variant || 'primary'}>
      {loading ? <ActivityIndicator size={'small'} /> : <Text>{children}</Text>}
    </StyledButton>
  )
}
