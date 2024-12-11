import { Color, ColorName } from '@/theme/light/colors';
import React from 'react';
import { View, ViewProps } from 'react-native';
import styled from 'styled-components/native';

export interface CenterProps extends ViewProps {
  horizontal?: boolean;
  vertical?: boolean;
  background?: ColorName;
}

const Box = styled(View)<{ horizontal?: boolean; vertical?: boolean;  background?: Color;}>`
  align-items: ${({ horizontal, vertical }) =>
    (horizontal && !vertical) || (!horizontal && !vertical)
      ? 'center'
      : 'flex-start'};
  justify-content: ${({ horizontal, vertical }) =>
    (vertical && !horizontal) || (!horizontal && !vertical)
      ? 'center'
      : 'flex-start'};
  background: ${({background, theme}) => theme.colors[background] || theme.colors.transparent};
`;

export const Center: React.FC<CenterProps> = ({
  horizontal = false,
  vertical = false,
  children = null,
  ...props
})  => {
  return (
    <Box horizontal={horizontal} vertical={vertical}  {...props}>
      {children}
    </Box>
  );
};
