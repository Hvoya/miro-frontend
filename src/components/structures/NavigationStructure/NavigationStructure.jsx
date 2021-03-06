import React from 'react';
import { useSpring, config } from 'react-spring';

import { SRoot } from './Atoms';

const openWidth = 280;
const closedWidth = 88;

const NavigationContainerStructure = ({ children, open, onToggle }) => {
  const props = useSpring({ width: open ? openWidth : closedWidth, config: config.wobbly });

  return (
    <SRoot onMouseOver={onToggle} onMouseOut={onToggle} style={props}>
      {children}
    </SRoot>
  );
};

export default React.memo(NavigationContainerStructure);
