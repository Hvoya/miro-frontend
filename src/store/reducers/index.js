import { combineReducers } from 'redux';

import { langReducer } from './langReducer';
import { UIReducer } from './UIReducer';

export const reducer = combineReducers({
  lang: langReducer,
  UI: UIReducer,
});
