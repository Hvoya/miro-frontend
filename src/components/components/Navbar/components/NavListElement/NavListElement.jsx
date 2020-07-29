import React, { memo } from 'react';
import { useSpring } from 'react-spring';

import { SIcon, SInnerLink, SRoot, SText } from './Atoms';

const NavListElement = ({ icon, to, text, open }) => {
  const { opacity, paddingLeft } = useSpring({ opacity: open ? 1 : 0, paddingLeft: open ? '20px' : '34px' });
  return (
    <SRoot to={to}>
      <SInnerLink style={{ paddingLeft }}>
        <SIcon>{icon}</SIcon>
        <SText style={{ opacity }}>{text}</SText>
      </SInnerLink>
    </SRoot>
  );
};

export default memo(NavListElement);
