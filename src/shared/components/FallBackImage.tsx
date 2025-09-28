import { FC, useState } from 'react'
import { View } from 'react-native'
import FastImage, { FastImageProps } from 'react-native-fast-image'

const fallbackImage = require('@assets/images/fallback.png')

interface FallbackImageProps extends Omit<FastImageProps, 'source'> {
  uri?: string
  className?: string
}

const FallBackImage: FC<FallbackImageProps> = ({
  uri,
  className,
  ...props
}) => {
  const [error, setError] = useState(false)

  return (
    <View className={className}>
      <FastImage
        source={
          error || !uri
            ? fallbackImage
            : { uri, priority: FastImage.priority.normal }
        }
        style={{ width: '100%', height: '100%' }}
        resizeMode={FastImage.resizeMode.cover}
        onError={() => setError(true)}
        {...props}
      />
    </View>
  )
}

export default FallBackImage
