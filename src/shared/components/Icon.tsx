import { icons } from '@constants/icons'
import { IconName } from '@types'
import { SvgProps } from 'react-native-svg'

interface IconProps extends SvgProps {
  name: IconName
  size?: number
  color?: string
  fill?: string
  stroke?: string
  strokeWidth?: number
}

export const Icon = ({
  name,
  size = 24,
  color = 'black',
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  const Component = icons[name]

  return (
    <Component
      width={size}
      height={size}
      fill={fill || color}
      stroke={stroke || color}
      strokeWidth={strokeWidth}
    />
  )
}
