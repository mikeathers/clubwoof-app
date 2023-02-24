import {Text as NText, View as NView} from 'react-native'
import styled from 'styled-components/native'

import {Button as SButton, Image as SImage, TextInput as STextInput} from '@/components'
import {colors, fonts, fontSizes, lineHeights, spacing} from '@/styles'

export const Container = styled(NView)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.pureWhite};
`

export const Heading = styled(NText)`
  font-family: ${fonts.neucha};
  font-size: ${fontSizes.xxl};
  margin-bottom: ${spacing.space3x};
`

export const TextInput = styled(STextInput)``

export const RegisterImage = styled(SImage)`
  height: 330px;
  width: 330px;
`
export const FormContent = styled(NView)``

export const ErrorText = styled(NText)`
  color: red;
  margin-bottom: ${spacing.space1x};
  width: 285px;
`

export const GoToLoginContainer = styled(NView)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: ${spacing.space2x};
`
export const GoToLoginText = styled(NText)`
  margin-right: ${spacing.spaceHalfx};
  font-family: ${fonts.neucha};
  font-size: ${fontSizes.l};
`
export const GoToLoginAction = styled(NText)`
  font-family: ${fonts.neucha};
  font-size: ${fontSizes.l};
  color: ${colors.coral};
`

export const SignUpCompleteContainer = styled(NView)`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.pureWhite};
`

export const SignUpComplete = styled(NText)`
  font-family: ${fonts.neucha};
  line-height: ${lineHeights.heading};
  font-size: ${fontSizes.xxl};
  margin-top: ${spacing.space10x};
  width: 80%;
`
export const OpenMailAppButton = styled(SButton)`
  margin-top: ${spacing.space4x};
`

export const CompleteRegisterImage = styled(SImage)`
  width: 330px;
  height: 245px;
  margin-top: ${spacing.space10x};
`
