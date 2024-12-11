import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthLayout } from '@/layout/Auth'
import { LoginForm } from './components/LoginForm'
import { translate } from '@/localization/translate'

const LoginView: React.FC = function () {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Login',
    })
  }, [navigation])

  return (
    <AuthLayout title={translate('auth.login')} safe>
      <LoginForm />
    </AuthLayout>
  )
}
export default LoginView
