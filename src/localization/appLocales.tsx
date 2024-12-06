import {translate} from './translate';

export interface AppLocales {
  name: string;
  locale: string;
}

export const appLocales: AppLocales[] = [
  {name: translate('common.languages.english'), locale: 'en'},
  {
    name: translate('common.languages.vietnamese'),
    locale: 'vi',
  },
];
