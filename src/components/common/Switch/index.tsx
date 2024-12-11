import React, { useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { Easing } from 'react-native-reanimated';

import { MotiTransitionProp, MotiView } from 'moti';
import { useTheme } from 'styled-components/native';
import { MotiColor } from '@/components/MotiColor';

type SwitchProps = {
  isActive?: boolean;
  onPress?: () => void;
  size: number;
};

const transition: MotiTransitionProp = {
  type: 'timing',
  duration: 300,
  easing: Easing.inOut(Easing.ease),
};

export const Switch: React.FC<SwitchProps> = function ({ isActive, onPress, size }) {
  const trackWitch = useMemo(() => {
    return size;
  }, [size]);

  const trackHeight = useMemo(() => {
    return size * 0.5;
  }, [size]);

  const { colors } = useTheme();
  return (
    <Pressable onPress={onPress}>
      <View
        style={useMemo(
          () => ({
            alignItems: 'center',
            justifyContent: 'center',
            width: size,
          }),
          [size],
        )}>
        <MotiColor
          backgroundColor={colors.switch}
          style={useMemo(
            () => ({
              width: trackWitch,
              height: trackHeight,
              borderRadius: trackHeight / 2,
              borderWidth: 1,
              borderColor: colors.switch,
            }),
            [colors, trackHeight, trackWitch],
          )}
        />
        <MotiView
          transition={transition}
          animate={useMemo(
            () => ({
              translateX: isActive ? trackWitch * 0.25 : -trackWitch * 0.25,
            }),
            [isActive, trackWitch],
          )}
          style={useMemo(
            () => ({
              position: 'absolute',
              width: trackHeight * 0.8,
              height: trackHeight * 0.8,
              borderRadius: (trackHeight * 0.8) / 2,
              backgroundColor: colors.switchTrack,
            }),
            [colors, trackHeight],
          )}
        />
      </View>
    </Pressable>
  );
};
