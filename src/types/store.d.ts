import { MetadataState } from '@src/slices/metadata/types';
import { LoadingState } from '@src/slices/loading/types';
import { ThemeState } from '@src/slices/theme/types';
import { LanguageState } from '@src/slices/language/types';
import { AuthState } from '@/slices/auth/types';

declare module 'app-store' {
  export interface RootState {
    loading: LoadingState;
    metadata: MetadataState;
    theme: ThemeState;
    language: LanguageState;
    auth: AuthState;
  }
}

export interface RootState {
  loading: LoadingState;
  metadata: MetadataState;
  theme: ThemeState;
  language: LanguageState;
  auth: AuthState;
}