import React from 'react';

import Cube from './components/Cube/Cube';
import Logo from './components/Logo/Logo';
import Body from './components/Body/Body';
import NavList from './components/NavlList/NavList';
import LanguageSwitch from 'components/LanguageSwitch';
import { SRoot } from './Atoms';

const Navbar = ({ config, open }) => {
  return (
    <SRoot>
      <Cube />
      <Logo />
      <Body>
        <NavList config={config} open={open} />
        <LanguageSwitch />
      </Body>
    </SRoot>
  );
};

export default React.memo(Navbar);
