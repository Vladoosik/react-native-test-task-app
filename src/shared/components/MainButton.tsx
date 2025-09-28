import { FC, memo } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  text: string
}

const MainButton: FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <TouchableOpacity
      className=" items-center bg-black w-full pt-[22px] pb-[22px] rounded-full"
      {...props}
    >
      <Text className="font-abel text-base text-white">{text}</Text>
    </TouchableOpacity>
  )
}

export default memo(MainButton)
