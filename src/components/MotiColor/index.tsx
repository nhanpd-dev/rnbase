import React, { PropsWithChildren } from 'react';
import { ViewProps } from 'react-native';

import { MotiView } from 'moti';
import { transitions } from '@/utils';


interface Props extends ViewProps {
  backgroundColor: string;
}

export const MotiColor: React.FC<PropsWithChildren<Props>> = ({ children, backgroundColor, ...props }) => {
  return (
    <MotiView transition={transitions.screen} from={{ backgroundColor }} animate={{ backgroundColor }} {...props}>
      {children}
    </MotiView>
  );
};
