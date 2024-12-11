import { Languages } from './resources';
import { TxKeyPath } from './types';

export interface AppLocales {
  name: TxKeyPath;
  locale: Languages;
}

export const appLocales: AppLocales[] = [
  { name: 'common.languages.english', locale: 'en' },
  {
    name: 'common.languages.vietnamese',
    locale: 'vi',
  },
];
