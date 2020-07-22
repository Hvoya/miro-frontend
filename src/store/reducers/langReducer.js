import produce from 'immer';

import { CHANGE_LANG_TO_EN, CHANGE_LANG_TO_RU } from '../actions/actionTypes';
import { ru, en } from '@/lang';

const initialState = ru;

export const langReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_LANG_TO_RU: {
      draft = ru;
      break;
    }
    case CHANGE_LANG_TO_EN: {
      draft = en;
      break;
    }
  }
}, initialState);
