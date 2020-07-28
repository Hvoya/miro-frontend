import { CHANGE_THEME, TOGGLE_NAVIGATION } from './actionTypes';

export const changeTheme = (themeName) => ({
  type: CHANGE_THEME,
  payload: themeName,
});

export const toggleNavbar = () => ({
  type: TOGGLE_NAVIGATION,
});
