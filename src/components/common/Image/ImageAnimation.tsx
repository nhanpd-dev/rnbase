import React, { useCallback } from 'react'
import {
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native'
import Reanimated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

type Props = {
  style?: StyleProp<ViewStyle>
  source: ImageSourcePropType
  resizeMode?: ImageResizeMode
}

const IMAGE: ImageStyle = {
  width: undefined,
  height: undefined,
  flex: 1,
}

export const ImageAnimation: React.FC<Props> = function (props) {
  const { style, source, resizeMode = 'contain' } = props
  const x = useSharedValue(0)

  const opacity = useAnimatedStyle(() => ({
    opacity: x.value,
  }))

  const handleOnLayout = useCallback(() => {
    x.value = withTiming(1, {
      duration: 1200,
      easing: Easing.in(Easing.ease),
    })
  }, [x])

  return (
    <View style={style}>
      <Reanimated.Image
        style={[IMAGE, opacity]}
        source={source}
        resizeMode={resizeMode}
        onLayout={handleOnLayout}
      />
    </View>
  )
}
