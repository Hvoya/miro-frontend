import React from 'react';
import { useHistory } from 'react-router';

import Navigation from '@/components/components/Navigation';

const NavigationController = () => {
  const history = useHistory();

  const handleLogoClick = () => history.push();
  const handleNavItemClick = (path) => history.push(path);
  const handleLogout = () => {};
  const handleSwitchLanguage = () => {};

  return (
    <Navigation
      onLanguageSwitcherClick={handleSwitchLanguage}
      onItemClick={handleNavItemClick}
      onLogoutClick={handleLogout}
      onLogoClick={handleLogoClick}
    />
  );
};

export default React.memo(NavigationController);
