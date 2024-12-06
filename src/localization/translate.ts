import {TOptions} from 'i18next';
import {ConvertedToObjectType, TxKeyPath} from './types';
import i18next from './i18n';

import {Translations} from './en';

/**
 * Translates text.
 * @param {TxKeyPath} key - The i18n key.
 * @param {i18n.TOptions} options - The i18n options.
 * @returns {string} - The translated text.
 * @example
 * Translations:
 *
 * ```en.ts
 * {
 *  "hello": "Hello, {{name}}!"
 * }
 * ```
 *
 * Usage:
 * ```ts
 * import { translate } from "./i18n"
 *
 * translate("common:ok", { name: "world" })
 * // => "Hello world!"
 * ```
 */

export function translate(key: TxKeyPath, options?: TOptions): string {
  if (i18next && i18next.isInitialized) {
    return i18next.t(key, options);
  }
  return key;
}

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
