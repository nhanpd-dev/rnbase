import React, { useMemo } from 'react';
import DropShadow from 'react-native-drop-shadow';
import { MotiPressable } from 'moti/interactions';
import { useTheme } from 'styled-components/native';
import { Text } from '../Text';
import {
  backgrounds,
  colors,
  borderColors,
  StyledButton,
  ButtonProps,
} from './constants';

export const Button: React.FC<ButtonProps> = function ({
  children,
  onPress,
  disabled = false,
  color,
  type = 'primary',
  background,
  ...props
}) {
  const theme = useTheme();
  const backgroundButton = useMemo(() => {
    if (background) return background;
    return backgrounds[type];
  }, [background, type]);

  const colorButton = useMemo(() => {
    if (color) return color;
    return colors[type];
  }, [type, color]);

  const borderColor = useMemo(() => {
    if (props.borderColor) return props.borderColor;
    return borderColors[type];
  }, [props.borderColor, type]);

  return (
    <MotiPressable
      disabled={!onPress || disabled}
      onPress={onPress}
      animate={({ hovered, pressed }) => {
        'worklet';
        return {
          opacity: hovered || pressed ? 0.6 : 1,
        };
      }}>
      <DropShadow
        style={{
          shadowColor: theme.colors[borderColor],
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.4,
          shadowRadius: 10,
          elevation: 5,
          backgroundColor: theme.colors[borderColor],
        }}>
        <StyledButton
          disabled={disabled}
          background={backgroundButton}
          borderColor={borderColor}
          {...props}>
          {typeof children === 'string' ? (
            <Text color={colorButton}>{children}</Text>
          ) : (
            children
          )}
        </StyledButton>
      </DropShadow>
    </MotiPressable>
  );
};
