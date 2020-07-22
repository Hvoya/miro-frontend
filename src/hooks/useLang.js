import { useContext } from 'react';
import pathOr from '@ramda/pathor';

import { langContext } from '../components/providers/LangProvider';

export const useLang = (...pathFragments) => {
  const dict = useContext(langContext);
  return pathOr('', pathFragments, dict);
};
