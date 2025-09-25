import { FC, memo, ReactNode } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface ButtonIconProps extends TouchableOpacityProps {
  children?: ReactNode
  className?: string
}

const ButtonIcon: FC<ButtonIconProps> = ({ children, className, ...props }) => {
  const baseStyle =
    'justify-center items-center w-[56px] h-[56px] rounded-full bg-white'

  return (
    <TouchableOpacity className={`${baseStyle} ${className}`} {...props}>
      {children}
    </TouchableOpacity>
  )
}

export default memo(ButtonIcon)
