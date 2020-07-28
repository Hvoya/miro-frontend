import { CHANGE_LANG_TO_EN, CHANGE_LANG_TO_RU, TOGGLE_LANG } from './actionTypes';

export const changeLangToRu = () => ({
  type: CHANGE_LANG_TO_RU,
});

export const changeLangToEn = () => ({
  type: CHANGE_LANG_TO_EN,
});

export const toggleLang = () => ({
  type: TOGGLE_LANG,
});
