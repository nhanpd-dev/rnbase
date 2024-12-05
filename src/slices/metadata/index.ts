import { createSlice } from '@/store/@reduxjs/toolkit'
import { useInjectReducer } from '@/store/redux-injectors'
// import { saga } from './saga'
import { initialStates } from '../initialStates'

const name = 'metadata';
const slice = createSlice({
  name,
  initialState: initialStates[name],
  reducers: {},
})

export const { actions: metadataActions, reducer: metadataReducer } = slice

export const useMetadataSlice = () => {
  useInjectReducer({ key: slice.name, reducer: metadataReducer });
  // useInjectSaga({ key: slice.name, saga });


  return {}
}
