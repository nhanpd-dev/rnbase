import React from 'react';
import { Text as TextRN, TextProps } from 'react-native';
import styled from 'styled-components/native';
import { ColorName } from '@/theme/light/colors';

interface StyledProps {
  color?: ColorName;
  size?: number;
}

const StyledText = styled(TextRN)<StyledProps>`
  color: ${({ color = 'text', theme }) =>
    theme.colors[color] || theme.colors.text};
  font-size: ${({ size }) => `${size || 16}px`};
`;

interface Props extends TextProps, StyledProps {}

export const Text: React.FC<Props> = ({ ...props }) => {
  return <StyledText {...props} />;
};
