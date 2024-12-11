/* eslint-disable no-param-reassign */

import { TOptions } from 'i18next';
import { Translations } from './en';
import i18next from './i18n';

import { ConvertedToObjectType, TxKeyPath } from './types';

export const translations: ConvertedToObjectType<Translations> = {} as ConvertedToObjectType<Translations>;

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
