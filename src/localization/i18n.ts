import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { getLanguageFromStorage, resources } from './resources';

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
