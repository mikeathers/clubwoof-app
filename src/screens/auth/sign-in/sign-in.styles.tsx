import {Text as NText, View as NView} from 'react-native'
import styled from 'styled-components/native'

import {Image as SImage, TextInput as STextInput} from '@/components'
import {colors, fonts, fontSizes, spacing} from '@/styles'

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

export const HeaderImage = styled(SImage)`
  height: 330px;
  width: 330px;
`
export const FormContent = styled(NView)``

export const ErrorText = styled(NText)`
  font-family: ${fonts.helvetica};
  color: red;
  margin-bottom: ${spacing.space2x};
  width: 285px;
`
export const CTATextContainer = styled(NView)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: ${spacing.space2x};
`
export const CTAText = styled(NText)`
  margin-right: ${spacing.spaceHalfx};
  font-family: ${fonts.neucha};
  font-size: ${fontSizes.l};
`
export const CTAAction = styled(NText)`
  font-family: ${fonts.neucha};
  font-size: ${fontSizes.l};
  color: ${colors.coral};
`
