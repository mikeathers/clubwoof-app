import {Text as NText, View as NView} from 'react-native'
import styled from 'styled-components/native'

import {Image as NImage} from '@/components'

export const View = styled(NView)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  background-color: white;
`

export const Text = styled(NText)`
  color: deeppink;
`

export const Image = styled(NImage)`
  width: 70%;
  height: 70%;
`
