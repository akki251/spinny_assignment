import {
  applyMiddleware,
  compose,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { reducers } from './reducers';
import thunk from 'redux-thunk';

const middleware = [...getDefaultMiddleware(), thunk];
export default configureStore({
  reducer: reducers,
  middleware,
});
