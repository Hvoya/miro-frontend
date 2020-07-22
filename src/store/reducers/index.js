import { combineReducers } from 'redux';

import { langReducer } from './langReducer';

export const reducer = combineReducers({
  lang: langReducer,
});
