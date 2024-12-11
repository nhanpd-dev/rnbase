import { AuthLayout } from '@/layout/Auth';
import React, { useEffect } from 'react'
import { LoginForm } from './components/LoginForm';
import { useNavigation } from '@react-navigation/native';
import { translate } from '@/localization/translate';


const LoginView: React.FC = function () {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Login',
    })
  }, [navigation]);

  return (
    <AuthLayout title={translate('auth.login')} safe>
      <LoginForm />
    </AuthLayout>
  )
}
export default LoginView;