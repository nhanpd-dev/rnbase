import { saveString, STORAGE, loadString } from '@/utils/storage'
import { en } from './en';
import { vi } from './vi';

export const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

export type Languages = keyof typeof resources


export function saveLanguage(language: Languages) {
  saveString(STORAGE.LANGUAGE, language || 'en');
}

export function getLanguageFromStorage(): Languages {
  const language = loadString(STORAGE.LANGUAGE) as Languages
  return language || 'en'
}
