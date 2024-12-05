import { MetadataState } from '@src/slices/metadata/types';
import { LoadingState } from '@src/slices/loading/types';

export interface RootState {
  loading: LoadingState;
  metadata: MetadataState;
}
