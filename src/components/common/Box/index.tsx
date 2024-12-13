import { ColorName } from '@/theme/light/colors';
import React from 'react';
import styled from 'styled-components/native';
import { FlexAlignType, Justify, Position, ViewProps } from '../types';

interface StyledProps {
  justify?: Justify;
  alignItems?: FlexAlignType;
  horizontal?: boolean;
  background?: ColorName;
  position?: Position;
}
export interface BoxProps extends ViewProps, StyledProps {}

const BoxStyled = styled.View<StyledProps>`
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  background: ${({ background = 'transparent', theme }) =>
    theme.colors[background]};
  position: ${({ position }) => position};
`;

export const Box: React.FC<BoxProps> = function ({
  ...props
}) {
  return <BoxStyled {...props} />
};
