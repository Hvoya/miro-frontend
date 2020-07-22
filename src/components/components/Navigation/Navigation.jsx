import React from 'react';

import NavigationStruct from '@/components/components/Navigation/Navigation.struct';
import Logo from '@/components/components/Logo';
import NavList from './shards/NavList';
import LanguageSwitch from '@/components/components/LanguageSwitch';

const Navigation = ({ onLanguageSwitcherClick, onItemClick, onLogoutClick, onLogoClick }) => {
  const logo = <Logo />;
  const list = <NavList />;
  const languageSwitcher = <LanguageSwitch />;
  const authManager = <div></div>;
  return <NavigationStruct logo={logo} list={list} languageSwitcher={languageSwitcher} authManager={authManager} />;
};

export default React.memo(Navigation);
