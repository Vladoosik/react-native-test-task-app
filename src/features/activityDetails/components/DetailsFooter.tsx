import { MainButton } from '@shared'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FC } from 'react'

interface DetailsFooterProps {
  onFavoritePress: () => void
}

const DetailsFooter: FC<DetailsFooterProps> = ({ onFavoritePress }) => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{ paddingBottom: insets.bottom + 5 }}
      className="px-3 sm:px-4 pb-2 sm:pb-4"
    >
      <MainButton
        onPress={onFavoritePress}
        activeOpacity={0.7}
        text={'Add to favorites'}
      />
    </View>
  )
}

export default DetailsFooter
