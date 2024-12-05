import { RootState } from '../store/RootState';
import { LoadingState } from './loading/types';
import { MetadataState } from './metadata/types';

const metadata: MetadataState = {
  authenticated: false,
};
const loading: LoadingState = {
  loadings: [],
};
// const errors: ErrorState = {
//   error: null,
// };



export const initialStates: RootState = {
  metadata,
  loading,
    // errors,
};
