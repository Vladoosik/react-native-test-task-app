import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'
import { Icons } from '@types'

const ArrowLeft: FC<Icons> = props => {
  const { width = 24, height = 25, fill = '#000' } = props
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <Path
        d="M7.828 11.393H20v2H7.828l5.364 5.364-1.414 1.414L4 12.393l7.778-7.778 1.414 1.414-5.364 5.364z"
        fill={fill}
      />
    </Svg>
  )
}

export default ArrowLeft
