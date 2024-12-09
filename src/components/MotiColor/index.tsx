import React, { PropsWithChildren } from 'react';
import { ViewProps } from 'react-native';
import { Easing } from 'react-native-reanimated';

import { MotiTransitionProp, MotiView } from 'moti';

export const transitions: { [key: string]: MotiTransitionProp } = {
  screen: { type: 'timing', duration: 450, easing: Easing.inOut(Easing.ease) },
};

interface Props extends ViewProps {
  backgroundColor: string;
}

export const MotiColor: React.FC<PropsWithChildren<Props>> = ({
  children,
  backgroundColor,
  ...props
}) => {
  return (
    <MotiView
      transition={transitions.screen}
      from={{ backgroundColor }}
      animate={{ backgroundColor }}
      {...props}>
      {children}
    </MotiView>
  );
};
