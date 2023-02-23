import React from 'react'

import type {StyledInputProps} from './text-input.styles'
import {Container, Error, Label, StyledTextInput} from './text-input.styles'

export const TextInput: React.FC<StyledInputProps> = (props) => {
  const {label, marginBottom, error, ...rest} = props

  const renderErrorSafely = (formError: FormikError) =>
    typeof formError === 'string' ? formError : undefined

  return (
    <Container marginBottom={marginBottom}>
      {label && <Label>{label}</Label>}
      <StyledTextInput autoCapitalize={'none'} {...rest} />
      {error && <Error>{renderErrorSafely(error)}</Error>}
    </Container>
  )
}
