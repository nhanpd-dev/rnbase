import React, { PropsWithChildren } from 'react';
import { useTheme } from 'styled-components/native';
import { Center } from '@/components/common/Center';
import { Screen } from '@/components/common/Screen';
import { Space } from '@/components/common/Space';
import { useThemeSlice } from '@/slices/theme';
import { Switch } from '@/components/common/Switch';
import { Row } from '@/components/common/Row';
import { Text } from '@/components/common/Text';

interface AuthLayoutProps {
  isShowToggleDarkMode?: boolean;
  safe?: boolean;
  title: string;
}

export const AuthLayout: React.FC<PropsWithChildren<AuthLayoutProps>> = ({ children, isShowToggleDarkMode, title, safe = false }) => {
  const { spacing } = useTheme();
  const { changeTheme, isDarkMode } = useThemeSlice();
  const toggleMode = () => changeTheme(isDarkMode ? 'light' : 'dark');
  return (
    <Screen safe={safe}>
      {isShowToggleDarkMode && (
        <Row style={{ padding: spacing.large }}>
          <Switch size={60} isActive={isDarkMode} onPress={toggleMode} />
        </Row>
      )}
      <Center style={{ paddingHorizontal: 16 }}>
        <Text size={48}>
          {title}
        </Text>
        <Space height={32} />
        {children}
      </Center>
    </Screen>
  );
};
