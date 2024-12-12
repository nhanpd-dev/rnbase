import React from 'react';
import { ViewStyle } from 'react-native';
import { FlexAlignType, View, ViewProps } from 'react-native';

export interface SpaceProps extends ViewProps {
  height?: number | string;
  width?: number | string;
  align?: FlexAlignType;
}

export const Space: React.FC<SpaceProps> = function ({  height = 0, width = '100%', align = 'flex-start', ...props }) {
  const styles: ViewStyle = [props.style, { height, width }];

  return <View {...props} style={styles} />;
};
