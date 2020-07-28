import React, { memo } from 'react';

import { SRoot } from './Atoms';

const Body = ({ children }) => {
  return <SRoot>{children}</SRoot>;
};

export default memo(Body);
