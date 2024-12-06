import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import {en} from './en'
import {vi} from './vi'
import { convertLanguageJsonToObject, translations } from './translate';
convertLanguageJsonToObject(en, translations, '');

export const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
  "en-US": {
    translation: en,
  },
};

i18next.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18next
