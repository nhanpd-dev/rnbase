import React from 'react';
import { styled } from 'styled-components/native';
import { Box, BoxProps } from '../Box';

interface StyledProps {
  height?: number;
  width?: number;
}

export interface SpaceProps extends BoxProps, StyledProps {}

const Styled = styled(Box)<StyledProps>`
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
`;

export const Space: React.FC<SpaceProps> = function ({ ...props }) {
  return <Styled {...props} />;
};
