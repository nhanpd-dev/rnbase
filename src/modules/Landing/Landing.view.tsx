import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Button } from '@/components/common/Button';
import { Space } from '@/components/common/Space';
import { AuthLayout } from '@/layout/Auth';
import { appLocales } from '@/localization/appLocales';
import { getLanguageFromStorage } from '@/localization/resources';
import { translate } from '@/localization/translate';
import { translations } from '@/localization/translations';
import { AppStackScreenProps, NavigationProps } from '@/navigators/appNavigator';
import { AppStackParamList } from '@/navigators/utils';
import { useLanguageSlice } from '@/slices/language';
// import { AppStackParamList, navigate } from '@/navigators/utils';

const SplashView: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const { i18n } = useTranslation();

  const goToLogin = () => navigation.push('LoginScreen');
  const { colors } = useTheme();
  const { language, changeLanguage } = useLanguageSlice();
  const { auth } = translations;

  const languagesSelector = useMemo(
    () => (
      <>
        {appLocales.map(currentLang => {
          const selectedLanguage = currentLang.locale === language;
          return (
            <Text
              style={{
                color: selectedLanguage ? colors.lightGrey : colors.text,
              }}
              key={currentLang.locale}
              onPress={() => {
                if (!selectedLanguage) {
                  i18n.changeLanguage(currentLang.locale);
                  changeLanguage(currentLang.locale);
                }
              }}>
              {translate(currentLang.name)}
            </Text>
          );
        })}
      </>
    ),
    [language],
  );
  return (
    <AuthLayout safe isShowToggleDarkMode>
      <Button onPress={goToLogin}>{translate(auth.login)}</Button>
      <Space height={28} />
      {languagesSelector}
    </AuthLayout>
  );
};
export default SplashView;
