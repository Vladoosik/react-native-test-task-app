import { FC } from 'react'
import Svg, { Path } from 'react-native-svg'
import { Icons } from '@types'

const FireIcon: FC<Icons> = props => {
  const { width = 16, height = 16, fill = '#000' } = props
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M8 15.333a5 5 0 01-3.425-8.642C5.469 5.85 7.667 4.333 7.333 1c4 2.667 6 5.333 2 9.333.667 0 1.667 0 3.334-1.646.18.515.333 1.069.333 1.646a5 5 0 01-5 5z"
        fill={fill}
      />
    </Svg>
  )
}

export default FireIcon
