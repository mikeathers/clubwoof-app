import type {TouchableOpacityProps} from 'react-native'
import {
  ActivityIndicator as NActivityIndicator,
  Text as NText,
  TouchableOpacity,
} from 'react-native'
import styled, {css} from 'styled-components/native'

import {borderRadius, colors, fonts, fontSizes} from '@/styles'

export interface StyledButtonProps extends TouchableOpacityProps {
  children: JSX.Element | JSX.Element[] | string[] | string
  variant?: 'primary'
  loading?: boolean
}

const primaryButton = css`
  background-color: ${colors.coral};
  font-family: ${fonts.neucha};
  color: ${colors.pureWhite};
  border-radius: ${borderRadius.rounded};
`

export const StyledButton = styled(TouchableOpacity)<StyledButtonProps>`
  width: 285px;
  height: 40px;
  ${({variant}) => {
    if (variant === 'primary') {
      return primaryButton
    }
  }}
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Text = styled(NText)`
  font-family: ${fonts.neucha};
  font-size: ${fontSizes.l};
  color: ${colors.pureWhite};
`

export const ActivityIndicator = styled(NActivityIndicator)``
