import React from 'react';
import {View, ViewProps} from 'react-native';

export const Col: React.FC<ViewProps> = function ({children, ...props}) {
  return (
    <View style={[{flexDirection: 'column'}, props.style]} {...props}>
      {children}
    </View>
  );
};
