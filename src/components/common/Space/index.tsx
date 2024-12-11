import React from 'react';
import { FlexAlignType, View, ViewProps } from 'react-native';

export interface SpaceProps extends ViewProps {
  height?: number | string;
  width?: number | string;
  align?: FlexAlignType;
}

export const Space: React.FC<SpaceProps> = function ({
  style = {},
  height = 0,
  width = '100%',
  align = 'flex-start',
  ...props
}) {
  const styles = [style, { height, width, align }];

  return <View {...props} style={styles} />;
};
