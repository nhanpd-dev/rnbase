import { getThemeFromStorage } from '@/theme/utils';
import { RootState } from '../store/RootState';
import { LoadingState } from './loading/types';
import { MetadataState } from './metadata/types';
import { ThemeState } from './theme/types';
import { LanguageState } from './language/types';
import { getLanguageFromStorage } from '@/localization/resources';
import { AuthState } from './auth/types';

const metadata: MetadataState = {
  authenticated: false,
};
const loading: LoadingState = {
  loadings: [],
};
const language: LanguageState = {
  language: getLanguageFromStorage(),
};

// const errors: ErrorState = {
//   error: null,
// };

export const theme: ThemeState = {
  selected: getThemeFromStorage(),
};

export const auth: AuthState = {
  authenticated: false,
};

export const initialStates: RootState = {
  metadata,
  loading,
  theme,
  language,
  auth,
};
