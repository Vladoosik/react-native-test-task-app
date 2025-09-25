import { FC, useState } from 'react'
import { View } from 'react-native'
import FastImage, { ResizeMode } from 'react-native-fast-image'

const fallbackImage = require('../../assets/images/fallback.png')

type FallBackImageProps = {
  uri?: string
  className?: string
  width?: number
  height?: number
  borderRadius?: number
  resizeMode?: ResizeMode
  roundedCorners?: 'all' | 'bottom' | 'top' | 'none'
}

const FallbackImage: FC<FallBackImageProps> = ({
  uri,
  className = 'w-full h-48 rounded-2xl overflow-hidden',
  width,
  height,
  borderRadius = 20,
  resizeMode = FastImage.resizeMode.cover,
  roundedCorners = 'all',
}) => {
  const [error, setError] = useState<boolean>(false)

  const getBorderRadius = () => {
    switch (roundedCorners) {
      case 'all':
        return borderRadius
      case 'bottom':
        return {
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
        }
      case 'top':
        return {
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
        }
      case 'none':
        return 0
      default:
        return borderRadius
    }
  }

  const borderRadiusStyle = getBorderRadius()
  const imageStyle = {
    width: '100%' as const,
    height: '100%' as const,
    ...(width && { width }),
    ...(height && { height }),
    ...(typeof borderRadiusStyle === 'number' 
      ? { borderRadius: borderRadiusStyle } 
      : borderRadiusStyle),
  }

  return (
    <View className={className}>
      <FastImage
        source={
          error || !uri
            ? fallbackImage
            : { uri, priority: FastImage.priority.normal }
        }
        style={imageStyle}
        resizeMode={resizeMode}
        onError={() => setError(true)}
      />
    </View>
  )
}

export default FallbackImage
