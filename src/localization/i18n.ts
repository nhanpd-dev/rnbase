import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { convertLanguageJsonToObject, translations } from './translations';
import { getLanguageFromStorage, resources } from './resources';
import { en } from './en';

convertLanguageJsonToObject(en, translations, '');

i18next.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const currentLang = getLanguageFromStorage();
i18next.changeLanguage(currentLang);

export default i18next;
