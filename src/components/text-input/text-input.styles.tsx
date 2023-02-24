import type {TextInputProps} from 'react-native'
import {Text as NText, TextInput as NTextInput, View as NView} from 'react-native'
import styled from 'styled-components/native'

import type {Spacing} from '@/styles'
import {borderRadius, colors, fonts, fontSizes, lineHeights, spacing} from '@/styles'

export interface StyledInputProps extends TextInputProps {
  label?: string
  disabled?: boolean
  error?: FormikError
  marginBottom?: keyof Spacing
  name: string
}

type ContainerProps = Pick<StyledInputProps, 'marginBottom'>

export const Container = styled(NView)<ContainerProps>`
  position: relative;
  width: 100%;
  font-size: ${fontSizes.m};
  line-height: ${lineHeights.body};
  margin-bottom: ${({marginBottom}) =>
    marginBottom ? spacing[marginBottom] : spacing.space2x};
`

export const StyledTextInput = styled(NTextInput)`
  width: 285px;
  height: 40px;
  font-family: ${fonts.neucha};
  font-size: ${fontSizes.l};
  border: 1px solid ${colors.darkPurple};
  border-radius: ${borderRadius.rounded};
  padding: ${spacing.space1x} ${spacing.space2x};
`

export const Label = styled(NText)`
  font-size: ${fontSizes.l};
  font-family: ${fonts.neucha};
  margin-bottom: ${spacing.space1x};
`

export const Error = styled(NText)`
  color: red;
  padding-top: 8px;
  width: 285px;
`
