/* eslint-disable no-param-reassign */
import { Translations } from './en';
import { ConvertedToObjectType, TxKeyPath } from './types';

export const translations: ConvertedToObjectType<Translations> =
  {} as ConvertedToObjectType<Translations>;

export const convertLanguageJsonToObject = (
  json: object,
  objToConvertTo: ConvertedToObjectType<any>,
  current: string,
) => {
  Object.entries(json).forEach(([key, value]) => {
    const currentLookupKey = current ? `${current}.${key}` : key;
    if (typeof value === 'object') {
      objToConvertTo[key] = {};
      convertLanguageJsonToObject(value, objToConvertTo[key], currentLookupKey);
    } else {
      objToConvertTo[key] = currentLookupKey as TxKeyPath;
    }
  });
};
