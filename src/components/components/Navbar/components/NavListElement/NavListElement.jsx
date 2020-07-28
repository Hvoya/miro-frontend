import React, { memo } from 'react';

import { Link, SRoot } from './Atoms';

const NavListElement = ({ icon: Icon, to, text }) => {
  return (
    <SRoot>
      <Icon />
      <Link to={to}>{text}</Link>
    </SRoot>
  );
};

export default memo(NavListElement);
