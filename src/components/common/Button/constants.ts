import { ColorName } from '@/theme/light/colors';
import { Center } from '../Center';
import styled from 'styled-components/native';
import { BoxProps } from '../Box';

export type ButtonType = 'primary' | 'default';

export interface StyledProps {
  disabled?: boolean;
  borderColor?: ColorName;
  type?: ButtonType;
}

export const StyledButton = styled(Center)<StyledProps>`
  padding: ${({ theme }) =>
    `${theme.spacing.small}px ${theme.spacing.large}px`};
  border-radius: ${({ theme }) => `${theme.spacing.large}px`};
  border: 1px solid
    ${({ theme, borderColor = 'black' }) => theme.colors[borderColor]};
  opacity: ${({ disabled }) => (disabled ? 0.85 : 1)};
`;

export interface ButtonProps extends BoxProps, StyledProps {
  onPress?: () => void;
  color?: ColorName;
}

export const backgrounds: { [key in ButtonType]: ColorName } = {
  primary: 'primary',
  default: 'transparent',
};

export const colors: { [key in ButtonType]: ColorName } = {
  primary: 'white',
  default: 'text',
};

export const borderColors: { [key in ButtonType]: ColorName } = {
  primary: 'primary',
  default: 'black',
};
