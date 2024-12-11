import React, { PropsWithChildren } from 'react';
import { Text } from 'react-native';
import { Screen } from '@/components/common/Screen';
import { Center } from '@/components/common/Center';
import { Space } from '@/components/common/Space';

interface Props {
  title?: string;
}

export const HomeLayout: React.FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <Screen>
      <Center>
        <Text>{title}</Text>
        <Space height={32} />
        {children}
      </Center>
    </Screen>
  );
};
