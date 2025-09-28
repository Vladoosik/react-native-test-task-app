import { FC, memo } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Icon } from './Icon'

const ButtonIcon: FC<TouchableOpacityProps> = ({ ...props }) => {
  return (
    <TouchableOpacity
      className="ml-4 justify-center items-center w-[56px] h-[56px] rounded-full bg-white"
      {...props}
    >
      <Icon name="arrowLeft" size={24} color="#000" />
    </TouchableOpacity>
  )
}

export default memo(ButtonIcon)
