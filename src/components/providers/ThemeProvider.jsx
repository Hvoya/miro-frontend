import React, { memo } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { themesNamesToObjects } from '../../enums/themes';

const ThemeProvider = ({ children }) => {
  const { theme: themeName } = useSelector((state) => state.UI);
  return <StyledProvider theme={themesNamesToObjects[themeName]}>{children}</StyledProvider>;
};

export default memo(ThemeProvider);
