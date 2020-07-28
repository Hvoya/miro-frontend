import React from 'react';

import Cube from './components/Cube/Cube';
import Logo from './components/Logo/Logo';
import Body from './components/Body/Body';
import NavList from './components/NavlList/NavList';

import { SRoot } from './Atoms';

const Navbar = ({ config }) => {
  return (
    <SRoot>
      <Cube />
      <Logo />
      <Body>
        <NavList config={config} />
      </Body>
    </SRoot>
  );
};

export default React.memo(Navbar);
