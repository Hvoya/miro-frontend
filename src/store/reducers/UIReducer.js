import produce from 'immer';

import { themesNames } from '../../enums/themes';
import { CHANGE_THEME, TOGGLE_NAVIGATION } from '../actions/actionTypes';

const initialState = {
  theme: themesNames.base,
  isNavbarOpen: false,
};

export const UIReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_THEME: {
      draft.theme = action.payload;
      break;
    }
    case TOGGLE_NAVIGATION: {
      draft.isNavbarOpen = !draft.isNavbarOpen;
      break;
    }
  }
}, initialState);
