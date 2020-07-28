import React, { memo } from 'react';

import NavListElement from '../NavListElement/NavListElement';

const NavList = ({ config }) => {
  return (
    <>
      {config.map((item) => (
        <NavListElement key={item.to} {...item} />
      ))}
    </>
  );
};

export default memo(NavList);
