import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'rnbase.mmkv.v1',
  // Issue when set encryptionKey on android
  // Can't save storage on android if data > 253 characters when first time installed app
  // upgrade react-native-mmkv to v3 fix this issue but v3 required enable New Architecture
  // Temporary fix by install: "react-native-mmkv": "https://registry.npmjs.org/@mendozammatias/react-native-mmkv/-/react-native-mmkv-2.12.2.tgz",
  // Waiting for release version 2.13.0
  // Step:
  // - install app
  // - do something like: save data into storage
  // - close app, reopen app => no storage data saved
  // - do something like: save data into storage
  // - close app, reopen app => everything saved
  encryptionKey: '3#pX$7q!Fj9vK&8wZc@B1r%F!A',
});

export const STORAGE = {
  LANGUAGE: 'LANGUAGE',
  USER_TOKEN: 'USER_TOKEN',
  SELECTED_THEME: 'selectedTheme',
};

export function loadString(key: string): string | null {
  // if (data) return JSON.parse(data);
  return storage.getString(key) ?? null;
}

export function saveString(key: string, value: string): boolean {
  try {
    storage.set(key, value);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export function remove(key: string): void {
  try {
    storage.delete(key);
  } catch {}
}

export const persistToken = (token: string): void => {
  saveString(STORAGE.USER_TOKEN, token);
};

export const readToken = (): string | null => {
  const accessToken = loadString(STORAGE.USER_TOKEN);
  return accessToken;
};

export const deleteToken = (): void => {
  remove(STORAGE.USER_TOKEN);
};

/**
 * Burn it all to the ground.
 */
export function clear(): void {
  try {
    storage.clearAll();
  } catch {}
}

export function loadStogare<T>(key: string): T | null {
  try {
    const almostThere = loadString(key);
    return <T>JSON.parse(almostThere ?? '') || null;
  } catch {
    return null;
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export function saveStogare<T>(key: string, value: T): boolean {
  try {
    saveString(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}
