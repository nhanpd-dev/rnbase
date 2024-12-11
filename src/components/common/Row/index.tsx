import React from 'react';
import {View, ViewProps} from 'react-native';

export const Row: React.FC<ViewProps> = function ({children, ...props}) {
  return (
    <View style={[{flexDirection: 'row'}, props.style]} {...props}>
      {children}
    </View>
  );
};
