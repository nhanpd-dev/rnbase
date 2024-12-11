import React, { useMemo } from 'react';
import { ViewProps, ViewStyle } from 'react-native';

import { MotiPressable } from 'moti/interactions';
import { palette } from '@/theme/palette';
import { spacing } from '@/theme/spacing';
import { ColorName } from '@/theme/light/colors';
import { Center } from '../Center';
import { Text } from '../Text';

const styleDefault: ViewStyle = {
  padding: 8,
  paddingHorizontal: 16,
  borderRadius: spacing.large,
};

const SHADOW: ViewStyle = {
  elevation: 5,
  shadowColor: palette.black,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.4,
  shadowRadius: 10,
};

interface ButtonProps extends ViewProps {
  onPress?: () => void;
  shadow?: boolean;
  custom?: boolean;
  disabled?: boolean;
  labelColor?: ColorName;
}

export const Button: React.FC<ButtonProps> = function ({ children, style = {}, onPress, shadow = false, custom = false, disabled = false, labelColor = 'primary', ...props }) {
  return (
    <MotiPressable
      disabled={!onPress || disabled}
      onPress={onPress}
      animate={useMemo(
        () =>
          ({ hovered, pressed }) => {
            'worklet';

            return {
              opacity: hovered || pressed ? 0.6 : 1,
            };
          },
        [],
      )}>
      <Center background="secondary" style={[!custom && styleDefault, style, shadow && SHADOW]} {...props}>
        {typeof children === 'string' ? <Text color={labelColor}>{children}</Text> : children}
      </Center>
    </MotiPressable>
  );
};
