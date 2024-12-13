import React from 'react';
import { Text as TextRN, TextProps } from 'react-native';
import styled from 'styled-components/native';
import { ColorName } from '@/theme/light/colors';
import { FontFamily, FontWeight, TextAlign } from '../types';

interface StyledProps {
  color?: ColorName;
  size?: number;
  fontWeight?: FontWeight;
  textAlign?: TextAlign;
  fontFamily?: FontFamily;
}

const StyledText = styled(TextRN)<StyledProps>`
  color: ${({ color = 'text', theme }) =>
    theme.colors[color] || theme.colors.text};
  font-size: ${({ size }) => `${size || 16}px`};
  font-weight: ${({ fontWeight = 'normal' }) => fontWeight};
  text-align:  ${({ textAlign = 'auto' }) => textAlign};
  font-family:  ${({ fontFamily = 'Poppins' }) => fontFamily};
`;

interface Props extends TextProps, StyledProps {}

export const Text: React.FC<Props> = ({ ...props }) => {
  return <StyledText {...props} />;
};
