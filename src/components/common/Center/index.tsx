import React from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import { ColorName } from '@/theme/light/colors';

interface StyledProps {
  isHorizontal?: boolean;
  background?: ColorName;
}
export interface CenterProps extends ViewProps, StyledProps {}

const Box = styled.View<StyledProps>`
  align-items: ${({ isHorizontal = false }) => !isHorizontal ? 'center' : 'flex-start'};
  justify-content: ${({ isHorizontal = false }) => isHorizontal ? 'center' : 'flex-start'};
  background: ${({ background = 'transparent', theme }) => theme.colors[background]};
`;

export const Center: React.FC<CenterProps> = ({ isHorizontal = false, children, ...props }) => {
  return (
    <Box isHorizontal={isHorizontal} {...props}>
      {children}
    </Box>
  );
};
