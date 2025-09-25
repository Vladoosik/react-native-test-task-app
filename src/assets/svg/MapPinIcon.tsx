import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'
import { Icons } from '@types'

const MapPinIcon: FC<Icons> = props => {
  const {
    width = 16,
    height = 16,
    fill = '#000',
    stroke = '#F7F7F7',
    strokeWidth = 2,
  } = props
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M13 6.5c0 4.5-5 8-5 8s-5-3.5-5-8a5 5 0 1110 0z"
        fill={fill}
        stroke="#000"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 8.5a2 2 0 100-4 2 2 0 000 4z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default MapPinIcon
