import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';
import { MotiColor } from '@/components/MotiColor';

interface ScreenProps {
  safe?: boolean;
}
const styles: { [key: string]: ViewStyle } = {
  flex_1: {
    flex: 1,
  },
};

export const Screen: React.FC<PropsWithChildren<ScreenProps>> = function ({ children, safe = false }) {
  const { colors } = useTheme();
  if (!safe)
    return (
      <MotiColor style={styles.flex_1} backgroundColor={colors.background}>
        {children}
      </MotiColor>
    );
  return (
    <SafeAreaView style={[styles.flex_1]}>
      <MotiColor style={styles.flex_1} backgroundColor={colors.background}>
        {children}
      </MotiColor>
    </SafeAreaView>
  );
};
