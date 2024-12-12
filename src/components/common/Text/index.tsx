import React from 'react';
import { Text as TextRN, TextProps } from 'react-native';
import styled from 'styled-components/native';
import { ColorName } from '@/theme/light/colors';

const StyledText = styled(TextRN)<{ color?: ColorName; size?: number }>`
  color: ${({ color, theme }) => theme.colors[color] || theme.colors.text};
  font-size: ${({ size }) => `${size || 16}px`};
`;
interface Props extends TextProps {
  color?: ColorName;
  size?: number;
}
export const Text: React.FC<Props> = ({ children, color, ...props }) => {
  return (
    <StyledText color={color} {...props}>
      {children}
    </StyledText>
  );
};
