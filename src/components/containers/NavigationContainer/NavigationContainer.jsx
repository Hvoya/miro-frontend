import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from 'components/Navbar';
import { toggleNavbar } from '@/store/actions/UIActions';
import NavigationStructure from '@/components/structures/NavigationStructure';
import navigationConfig from '@/routes/navigationConfig';
import { useLang } from '@/hooks/useLang';

const NavigationContainer = () => {
  const dispatch = useDispatch();
  const lang = useLang('navigation');

  const { isNavbarOpen } = useSelector((state) => state.UI);

  const handleToggleNavbar = useCallback(() => dispatch(toggleNavbar()), []);

  const localizedConfig = navigationConfig.map((item) => ({ ...item, text: lang[item.langPath] }));

  return (
    <NavigationStructure onToggle={handleToggleNavbar} isOpen={isNavbarOpen}>
      <Navbar config={localizedConfig} />
    </NavigationStructure>
  );
};

export default React.memo(NavigationContainer);
