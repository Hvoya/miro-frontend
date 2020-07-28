import React, { createContext, memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { langDicts } from '@/lang';

export const langContext = createContext(null);

const LangProvider = ({ children }) => {
  const [dict, setDict] = useState({});
  const lang = useSelector((state) => state.lang);

  useEffect(() => {
    setDict(langDicts[lang]);
  }, [lang]);

  return <langContext.Provider value={dict}>{children}</langContext.Provider>;
};

export default memo(LangProvider);
