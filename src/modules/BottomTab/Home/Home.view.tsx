import React from 'react';
import { HomeLayout } from '@/layout/App';
import { Button } from '@/components/common/Button';
import { translate } from '@/localization/translate';
import { useAuth } from '@/slices/auth';

const HomeView: React.FC = function () {
  const { doLogout } = useAuth();
  return (
    <HomeLayout>
      <Button onPress={doLogout}>{translate('auth.logout')}</Button>
    </HomeLayout>
  );
};
export default HomeView;
