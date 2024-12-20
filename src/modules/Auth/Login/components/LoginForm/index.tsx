import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextInput } from '@/components/Form/TextInput';
import { Col } from '@/components/common/Col';
import { Space } from '@/components/common/Space';
import { Button } from '@/components/common/Button';
import { useAuth } from '@/slices/auth';
import schema from '../../schema';

export type LoginPayload = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = function () {
  const { doLogin } = useAuth();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const form = useForm<LoginPayload>({
    defaultValues: {
      email: 'nhantest@example.com',
      password: 'password1',
    },
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = form;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: t('navigate:login'),
    });
  }, [navigation, t]);

  const onSubmit = (data: LoginPayload) => doLogin(data);

  return (
    <FormProvider {...form}>
      <Col style={{ width: '100%' }}>
        <TextInput name="email" placeholder={t('auth.enter_email')} autoCapitalize="none" keyboardType="email-address" />
        <Space height={16} />
        <TextInput name="password" placeholder={t('auth.enter_password')} autoCapitalize="none" secureTextEntry />
        <Space height={32} />
        <Col>
          <Button onPress={handleSubmit(onSubmit)}>{t('auth.login')}</Button>
        </Col>
      </Col>
    </FormProvider>
  );
};
