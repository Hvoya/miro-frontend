import { CHANGE_LANG_TO_EN, CHANGE_LANG_TO_RU, TOGGLE_LANG } from '../actions/actionTypes';
import { ru, en } from '@/lang';

const initialState = ru;

export const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANG_TO_RU: {
      return ru;
    }
    case CHANGE_LANG_TO_EN: {
      return en;
    }
    case TOGGLE_LANG: {
      return state === ru ? en : ru;
    }
    default: {
      return state;
    }
  }
};
