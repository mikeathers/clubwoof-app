import * as React from 'react'
import type {FastImageProps, Source} from 'react-native-fast-image'
import FastImage from 'react-native-fast-image'

export const Image = ({source, style, ...props}: FastImageProps) => {
  return (
    <FastImage
      source={
        Object.prototype.hasOwnProperty.call(source, 'uri')
          ? {...(source as Source), cache: FastImage.cacheControl.immutable}
          : source
      }
      style={style}
      {...props}
    />
  )
}

export const preloadImages = (sources: string[]) => {
  FastImage.preload(sources.map((source) => ({uri: source})))
}
