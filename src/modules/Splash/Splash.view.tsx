import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const SplashView: React.FC = function () {
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View pointerEvents="none">
        <Text>SplashView</Text>
      </View>
    </SafeAreaView>
  );
};
export default SplashView;
