import React, { memo } from 'react';

import NavListElement from '../NavListElement/NavListElement';

const NavList = ({ config, open }) => {
  return (
    <>
      {config.map((item) => (
        <NavListElement open={open} key={item.to} {...item} />
      ))}
    </>
  );
};

export default memo(NavList);
