import React, { PropsWithChildren } from 'react';
import { Text } from 'react-native';
import { Center } from '@/components/common/Center';
import { Screen } from '@/components/common/Screen';
import { Space } from '@/components/common/Space';

interface AuthLayoutProps {
  title?: string;
  isShowToggleDarkMode?: boolean;
  safe?: boolean;
}

export const AuthLayout: React.FC<PropsWithChildren<AuthLayoutProps>> =
  function ({ children, title, isShowToggleDarkMode, safe = false }) {
    return (
      <Screen safe={safe}>
        {/* {isShowToggleDarkMode && (
          <Row justifyContent="flex-end" padding="small">
            <Switch size={60} isActive={isDarkMode} onPress={toggleMode} />
          </Row>
        )} */}
        <Center>
          <Text>{title}</Text>
          <Space height={32} />
          {children}
        </Center>
      </Screen>
    );
  };
